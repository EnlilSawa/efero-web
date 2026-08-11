# Demoforespørsler

Alle «Book en demo»-knapper peker til `/book-demo`. Skjemaet sender en validert
forespørsel til `/api/demo`, som varsler Efero via Resend.

## Konfigurasjon

- `RESEND_API_KEY` er påkrevd for å sende e-post.
- `DEMO_NOTIFICATION_EMAIL` er valgfri og bruker `kontakt@efero.no` som standard.
- `DEMO_FROM_EMAIL` er valgfri og bruker `Efero <noreply@efero.no>` som standard.
- `RESEND_API_ENDPOINT` er valgfri og brukes bare når innsendingen skal testes mot
  en lokal e-postmock. Produksjon bruker Resends offisielle endepunkt som standard.

GitHub-workflowen sender allerede `RESEND_API_KEY` inn i Cloudflare-bygget. Bekreft
at denne GitHub-hemmeligheten er satt før første produksjonsdeploy av skjemaet.

## Lokal kontroll

```bash
npm run typecheck
npm test
npm run build
```

Test både tom innsending, gyldig modulvalg, ønsket oppstart, feiltilstand og
bekreftelsestilstand. Lokal suksessflyt kan testes med en lokal mock ved å sette
`RESEND_API_ENDPOINT`; ingen ekte kundeopplysninger eller e-poster skal brukes.
