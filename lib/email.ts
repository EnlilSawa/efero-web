// E-postutsending via Resend (rå HTTP API — samme mønster som app/api/contact
// og edge-funksjonene i handverker-app; ingen `resend`-npm-pakke i dette repoet).
// Avsenderdomenet efero.no MÅ være verifisert i Resend.
// Krever RESEND_API_KEY i .env.local.

const FONT = "'Inter', Arial, Helvetica, sans-serif"

function waitlistConfirmationHtml(): string {
  return `<!DOCTYPE html>
<html lang="nb">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="light only" />
  <title>Du er på ventelisten</title>
</head>
<body style="margin:0; padding:0; background:#F5F7FA;">
  <!-- Preheader (skjult forhåndsvisningstekst) -->
  <div style="display:none; max-height:0; overflow:hidden; opacity:0;">Du er på ventelisten for Efero. Vi varsler deg så snart vi åpner.</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F5F7FA; padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; width:100%; background:#FFFFFF; border-radius:12px; overflow:hidden;">

          <!-- 1. Header (navy) -->
          <tr>
            <td align="center" style="background:#0A1B33; padding:32px;">
              <span style="font-family:${FONT}; font-size:28px; font-weight:700; letter-spacing:-0.5px; color:#FFFFFF;"><span style="color:#2563FF;">E</span>fero</span>
            </td>
          </tr>

          <!-- 2. Body -->
          <tr>
            <td style="padding:36px 32px 8px;">
              <h1 style="margin:0 0 20px; font-family:${FONT}; font-size:26px; font-weight:700; color:#0A1B33;">Du er på ventelisten!</h1>

              <p style="margin:0 0 16px; font-family:${FONT}; font-size:16px; line-height:1.6; color:#64748B;">
                Takk for at du meldte din interesse for Efero — appen som gir håndverkere kontroll over bedriften.
              </p>
              <p style="margin:0 0 24px; font-family:${FONT}; font-size:16px; line-height:1.6; color:#64748B;">
                Vi jobber på spreng for å gjøre Efero klar. Du er blant de første som får vite når vi åpner dørene.
              </p>

              <!-- Boks: Hva kan du forvente? -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:8px; margin:0 0 24px;">
                <tr>
                  <td style="padding:20px;">
                    <p style="margin:0 0 12px; font-family:${FONT}; font-size:16px; font-weight:700; color:#0A1B33;">Hva kan du forvente?</p>
                    <p style="margin:0 0 8px; font-family:${FONT}; font-size:15px; line-height:1.5; color:#1F2937;"><span style="color:#2563FF; font-weight:700;">&#10003;</span>&nbsp; Jobbstyring og tekniker-oversikt</p>
                    <p style="margin:0 0 8px; font-family:${FONT}; font-size:15px; line-height:1.5; color:#1F2937;"><span style="color:#2563FF; font-weight:700;">&#10003;</span>&nbsp; Automatisk fakturering med norsk MVA</p>
                    <p style="margin:0; font-family:${FONT}; font-size:15px; line-height:1.5; color:#1F2937;"><span style="color:#2563FF; font-weight:700;">&#10003;</span>&nbsp; Digitale tilbud og kunderegister</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 28px; font-family:${FONT}; font-size:16px; line-height:1.6; color:#64748B;">
                Vi sender deg en e-post så snart Efero er klar til bruk. Følg med!
              </p>

              <!-- 3. CTA -->
              <p style="margin:0 0 16px; font-family:${FONT}; font-size:16px; line-height:1.6; color:#1F2937;">
                Har du spørsmål i mellomtiden?
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 8px;">
                <tr>
                  <td align="center" bgcolor="#2563FF" style="border-radius:10px;">
                    <a href="mailto:kontakt@efero.no" style="display:inline-block; padding:14px 28px; font-family:${FONT}; font-size:16px; font-weight:600; color:#FFFFFF; text-decoration:none; border-radius:10px;">Kontakt oss</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 4. Footer -->
          <tr>
            <td style="padding:28px 32px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #E2E8F0;">
                <tr>
                  <td align="center" style="padding-top:24px;">
                    <p style="margin:0 0 4px; font-family:${FONT}; font-size:13px; color:#64748B;">Efero — jobbstyring for norske håndverkere</p>
                    <p style="margin:0 0 12px; font-family:${FONT}; font-size:13px; color:#64748B;">kontakt@efero.no · efero.no</p>
                    <p style="margin:0; font-family:${FONT}; font-size:11px; line-height:1.5; color:#94A3B8;">Du mottar denne e-posten fordi du meldte deg på ventelisten vår.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

/**
 * Sender bekreftelses-e-post til en ny waitlist-påmelding.
 * Kaster ved feil — kalleren skal fange og logge, og ALDRI blokkere påmeldingen.
 */
export async function sendWaitlistConfirmation(to: string): Promise<void> {
  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    throw new Error('RESEND_API_KEY mangler')
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${resendKey}`,
    },
    body: JSON.stringify({
      from: 'Efero <kontakt@efero.no>',
      to,
      subject: 'Du er på listen! 🎉',
      html: waitlistConfirmationHtml(),
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => '')
    throw new Error(`Resend feilet (${res.status}): ${detail}`)
  }
}
