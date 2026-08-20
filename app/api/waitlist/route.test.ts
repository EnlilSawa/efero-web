import { afterEach, describe, expect, it, vi } from 'vitest'
import { NextRequest } from 'next/server'
import { POST } from './route'
import { WAITLIST_TEAM_OPTIONS, WAITLIST_TRADE_OPTIONS } from '@/lib/waitlist-request'

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
    expect(fetchMock).toHaveBeenCalledOnce()
    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe('https://api.resend.com/emails')
    const email = JSON.parse(String(options.body)) as Record<string, unknown>
    expect(email).toMatchObject({ from: 'Efero <noreply@efero.no>', to: ['kontakt@efero.no'], reply_to: 'kari@example.no' })
    expect(String(email.text)).toContain(WAITLIST_TRADE_OPTIONS[0])
    expect(String(email.text)).toContain(WAITLIST_TEAM_OPTIONS[2])
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
