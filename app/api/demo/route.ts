import { NextRequest, NextResponse } from 'next/server'
import { buildDemoEmail, validateDemoBooking } from '@/lib/demo-booking'

const MAX_BODY_BYTES = 16_384

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get('content-length') ?? 0)
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Forespørselen er for stor.' }, { status: 413 })
  }

  let rawBody: string
  try {
    rawBody = await request.text()
  } catch {
    return NextResponse.json({ error: 'Kunne ikke lese skjemaet.' }, { status: 400 })
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'Forespørselen er for stor.' }, { status: 413 })
  }

  let body: unknown
  try {
    body = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Kunne ikke lese skjemaet.' }, { status: 400 })
  }

  const validation = validateDemoBooking(body)
  if (!validation.ok) {
    return NextResponse.json(
      { error: 'Kontroller feltene og prøv igjen.', fields: validation.errors },
      { status: 400 },
    )
  }

  // Honeypot: bots får et tilsynelatende vellykket svar uten at e-post sendes.
  if (validation.data.website) {
    return NextResponse.json({ ok: true })
  }

  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    console.error('Demo booking failed: RESEND_API_KEY is missing')
    return NextResponse.json(
      { error: 'Demoforespørsler er midlertidig utilgjengelige. Send oss gjerne en e-post.' },
      { status: 503 },
    )
  }

  const email = buildDemoEmail(validation.data)
  let response: Response
  try {
    response = await fetch(process.env.RESEND_API_ENDPOINT || 'https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: process.env.DEMO_FROM_EMAIL || 'Efero <noreply@efero.no>',
        to: [process.env.DEMO_NOTIFICATION_EMAIL || 'kontakt@efero.no'],
        reply_to: validation.data.email,
        subject: email.subject,
        html: email.html,
        text: email.text,
      }),
      signal: AbortSignal.timeout(10_000),
    })
  } catch (error) {
    console.error('Demo booking email request failed', error instanceof Error ? error.message : error)
    return NextResponse.json({ error: 'Sendingen tok for lang tid. Prøv igjen.' }, { status: 504 })
  }

  if (!response.ok) {
    console.error('Demo booking email rejected by Resend', response.status)
    return NextResponse.json({ error: 'Kunne ikke sende forespørselen. Prøv igjen.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
