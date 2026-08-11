import { afterEach, describe, expect, it, vi } from 'vitest'
import { NextRequest } from 'next/server'
import { POST } from './route'
import { CONTACT_START_OPTIONS, CONTACT_TEAM_OPTIONS } from '@/lib/contact-request'

const validPayload = {
  name: 'Kari Nordmann',
  email: 'kari@example.no',
  company: 'Nordmann Elektro AS',
  team: CONTACT_TEAM_OPTIONS[2],
  start: CONTACT_START_OPTIONS[0],
  message: '',
  website: '',
}

function request(payload: unknown) {
  return new NextRequest('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
}

afterEach(() => {
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
})

describe('POST /api/contact', () => {
  it('sender fra verifisert Efero-domene til kontaktadressen', async () => {
    vi.stubEnv('RESEND_API_KEY', 're_test_key')
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: 'email_123' }), { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    const response = await POST(request(validPayload))

    expect(response.status).toBe(200)
    expect(fetchMock).toHaveBeenCalledOnce()
    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe('https://api.resend.com/emails')
    const email = JSON.parse(String(options.body)) as Record<string, unknown>
    expect(email).toMatchObject({
      from: 'Efero <noreply@efero.no>',
      to: ['kontakt@efero.no'],
      reply_to: 'kari@example.no',
    })
    expect(String(email.text)).toContain(CONTACT_TEAM_OPTIONS[2])
  })

  it('avviser ugyldige felt uten å kontakte e-postleverandøren', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    const response = await POST(request({ name: '', email: 'ugyldig' }))

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
