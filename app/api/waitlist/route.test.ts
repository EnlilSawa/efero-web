import { afterEach, describe, expect, it, vi } from 'vitest'
import { NextRequest } from 'next/server'
import { POST } from './route'
import { WAITLIST_TEAM_OPTIONS, WAITLIST_TRADE_OPTIONS } from '@/lib/waitlist-request'
import { EFERO_WAITLIST_SEGMENT_ID } from '@/lib/resend-contacts'

const validPayload = {
  name: 'Kari Nordmann', email: 'kari@example.no', phone: '+47 900 00 000', company: 'Nordmann Elektro AS',
  trade: WAITLIST_TRADE_OPTIONS[0], teamSize: WAITLIST_TEAM_OPTIONS[2], consent: true, website: '',
}

function request(payload: unknown) {
  return new NextRequest('http://localhost/api/waitlist', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
}

afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals() })

describe('POST /api/waitlist', () => {
  it('sender en segmentert interessent til Efero', async () => {
    vi.stubEnv('RESEND_API_KEY', 're_test_key')
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: 'email_123' }), { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)
    const response = await POST(request(validPayload))
    expect(response.status).toBe(200)
    expect(fetchMock).toHaveBeenCalledTimes(2)

    const [contactUrl, contactOptions] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(contactUrl).toBe('https://api.resend.com/contacts')
    const contact = JSON.parse(String(contactOptions.body)) as Record<string, unknown>
    expect(contact).toMatchObject({
      email: 'kari@example.no',
      first_name: 'Kari',
      last_name: 'Nordmann',
      properties: {
        company_name: 'Nordmann Elektro AS',
        phone: '+47 900 00 000',
        trade: WAITLIST_TRADE_OPTIONS[0],
        team_size: WAITLIST_TEAM_OPTIONS[2],
      },
      segments: [{ id: EFERO_WAITLIST_SEGMENT_ID }],
    })

    const [url, options] = fetchMock.mock.calls[1] as [string, RequestInit]
    expect(url).toBe('https://api.resend.com/emails')
    const email = JSON.parse(String(options.body)) as Record<string, unknown>
    expect(email).toMatchObject({ from: 'Efero <noreply@efero.no>', to: ['kontakt@efero.no'], reply_to: 'kari@example.no' })
    expect(String(email.text)).toContain(WAITLIST_TRADE_OPTIONS[0])
    expect(String(email.text)).toContain(WAITLIST_TEAM_OPTIONS[2])
  })

  it('oppdaterer og segmenterer en kontakt som allerede finnes', async () => {
    vi.stubEnv('RESEND_API_KEY', 're_test_key')
    const fetchMock = vi.fn().mockImplementation((url: string, options: RequestInit) => {
      if (url === 'https://api.resend.com/contacts' && options.method === 'POST') {
        return Promise.resolve(new Response(null, { status: 409 }))
      }
      return Promise.resolve(new Response(JSON.stringify({ id: 'ok' }), { status: 200 }))
    })
    vi.stubGlobal('fetch', fetchMock)

    const response = await POST(request(validPayload))
    const result = await response.json() as { saved: boolean }

    expect(response.status).toBe(200)
    expect(result.saved).toBe(true)
    expect(fetchMock).toHaveBeenCalledTimes(4)
    expect(fetchMock.mock.calls[1][0]).toBe('https://api.resend.com/contacts/kari%40example.no')
    expect((fetchMock.mock.calls[1][1] as RequestInit).method).toBe('PATCH')
    expect(fetchMock.mock.calls[2][0]).toBe(
      `https://api.resend.com/contacts/kari%40example.no/segments/${EFERO_WAITLIST_SEGMENT_ID}`,
    )
    expect(fetchMock.mock.calls[3][0]).toBe('https://api.resend.com/emails')
  })

  it('bevarer innsendingen via e-post dersom Contacts er midlertidig nede', async () => {
    vi.stubEnv('RESEND_API_KEY', 're_test_key')
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response(null, { status: 500 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ id: 'email_123' }), { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    const response = await POST(request(validPayload))
    const result = await response.json() as { saved: boolean }

    expect(response.status).toBe(200)
    expect(result.saved).toBe(false)
  })

  it('avviser manglende samtykke', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    const response = await POST(request({ ...validPayload, consent: false }))
    expect(response.status).toBe(400)
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('later som botinnsendinger lykkes uten å sende e-post', async () => {
    vi.stubEnv('RESEND_API_KEY', 're_test_key')
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    const response = await POST(request({ ...validPayload, website: 'https://spam.example' }))
    expect(response.status).toBe(200)
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
