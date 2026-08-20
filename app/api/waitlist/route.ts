import { NextRequest, NextResponse } from 'next/server'
import { buildWaitlistEmail, validateWaitlistRequest } from '@/lib/waitlist-request'

const MAX_BODY_BYTES = 12_288

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') ?? 0)
  if (contentLength > MAX_BODY_BYTES) return NextResponse.json({ error: 'Forespørselen er for stor.' }, { status: 413 })

  let rawBody: string
  try { rawBody = await request.text() } catch { return NextResponse.json({ error: 'Kunne ikke lese skjemaet.' }, { status: 400 }) }
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) return NextResponse.json({ error: 'Forespørselen er for stor.' }, { status: 413 })

  let body: unknown
  try { body = JSON.parse(rawBody) } catch { return NextResponse.json({ error: 'Kunne ikke lese skjemaet.' }, { status: 400 }) }

  const validation = validateWaitlistRequest(body)
  if (!validation.ok) return NextResponse.json({ error: 'Kontroller feltene og prøv igjen.', fields: validation.errors }, { status: 400 })
  if (validation.data.website) return NextResponse.json({ ok: true })

  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    console.error('Waitlist request failed: RESEND_API_KEY is missing')
    return NextResponse.json({ error: 'Ventelisten er midlertidig utilgjengelig. Send oss gjerne en e-post.' }, { status: 503 })
  }

  const email = buildWaitlistEmail(validation.data)
  let response: Response
  try {
    response = await fetch(process.env.RESEND_API_ENDPOINT || 'https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${resendKey}` },
      body: JSON.stringify({
        from: process.env.WAITLIST_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL || 'Efero <noreply@efero.no>',
        to: [process.env.WAITLIST_NOTIFICATION_EMAIL || process.env.CONTACT_NOTIFICATION_EMAIL || 'kontakt@efero.no'],
        reply_to: validation.data.email,
        subject: email.subject,
        html: email.html,
        text: email.text,
      }),
      signal: AbortSignal.timeout(10_000),
    })
  } catch (error) {
    console.error('Waitlist email request failed', error instanceof Error ? error.message : error)
    return NextResponse.json({ error: 'Sendingen tok for lang tid. Prøv igjen.' }, { status: 504 })
  }

  if (!response.ok) {
    console.error('Waitlist email rejected by Resend', response.status)
    return NextResponse.json({ error: 'Kunne ikke registrere deg. Prøv igjen.' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
