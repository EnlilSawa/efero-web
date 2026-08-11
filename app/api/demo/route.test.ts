import { afterEach, describe, expect, it, vi } from 'vitest'
import { NextRequest } from 'next/server'
import { POST } from './route'
import { START_TIMELINE_OPTIONS, TEAM_SIZE_OPTIONS } from '@/lib/demo-booking'

const validPayload = {
  name: 'Kari Nordmann',
  company: 'Nordmann Elektro AS',
  email: 'kari@example.no',
  phone: '900 00 000',
  teamSize: TEAM_SIZE_OPTIONS[2],
  modules: ['planning', 'time', 'invoicing'],
  startTimeline: START_TIMELINE_OPTIONS[0],
  message: 'Vi bruker regneark i dag.',
  website: '',
}

function request(payload: unknown) {
  return new NextRequest('http://localhost/api/demo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
}

afterEach(() => {
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
})

describe('POST /api/demo', () => {
  it('returnerer feltfeil uten å kontakte e-postleverandøren', async () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    const response = await POST(request({}))

    expect(response.status).toBe(400)
    expect(fetchMock).not.toHaveBeenCalled()
    await expect(response.json()).resolves.toMatchObject({
      fields: { name: expect.any(String), modules: expect.any(String) },
    })
  })

  it('avviser for store forespørsler', async () => {
    const response = await POST(request({ ...validPayload, message: 'x'.repeat(20_000) }))

    expect(response.status).toBe(413)
  })

  it('sender en validert forespørsel til Resend', async () => {
    vi.stubEnv('RESEND_API_KEY', 're_test_key')
    vi.stubEnv('DEMO_NOTIFICATION_EMAIL', 'demo@efero.no')
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ id: 'email_123' }), { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    const response = await POST(request(validPayload))

    expect(response.status).toBe(200)
    expect(fetchMock).toHaveBeenCalledOnce()
    const [url, options] = fetchMock.mock.calls[0] as [string, RequestInit]
    expect(url).toBe('https://api.resend.com/emails')
    expect(options.headers).toMatchObject({ Authorization: 'Bearer re_test_key' })
    const email = JSON.parse(String(options.body)) as Record<string, unknown>
    expect(email).toMatchObject({
      from: 'Efero <noreply@efero.no>',
      to: ['demo@efero.no'],
      reply_to: 'kari@example.no',
      subject: 'Ny demoforespørsel: Nordmann Elektro AS',
    })
    expect(String(email.text)).toContain('Jobber og planlegger')
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
