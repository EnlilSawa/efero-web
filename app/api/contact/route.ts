import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, company, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Fyll inn alle påkrevde felt' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    return NextResponse.json({ error: 'E-postkonfigurasjon mangler' }, { status: 500 })
  }

  const html = `
    <p><strong>Navn:</strong> ${name}</p>
    <p><strong>E-post:</strong> ${email}</p>
    ${company ? `<p><strong>Bedrift:</strong> ${company}</p>` : ''}
    <p><strong>Melding:</strong></p>
    <p style="white-space:pre-wrap">${message}</p>
  `

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: 'noreply@efero.app',
      to: 'hei@efero.app',
      reply_to: email,
      subject: `Kontaktskjema: ${name}`,
      html,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Sending feilet' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
