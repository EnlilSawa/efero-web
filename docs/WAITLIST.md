# Venteliste

Ventelisten ligger på `/venteliste` og poster kontaktdata til `/api/waitlist`.
Innsendingen valideres på serveren, har en skjult spamfelle og krever eksplisitt
samtykke. En formatert lead-varsling sendes med samme Resend-oppsett som de
andre skjemaene på efero.no.

## Miljøvariabler

- `RESEND_API_KEY` er påkrevd.
- `WAITLIST_NOTIFICATION_EMAIL` bestemmer mottaker og faller tilbake til
  `CONTACT_NOTIFICATION_EMAIL`, deretter `kontakt@efero.no`.
- `WAITLIST_FROM_EMAIL` bestemmer avsender og faller tilbake til
  `CONTACT_FROM_EMAIL`, deretter `Efero <noreply@efero.no>`.
- `RESEND_API_ENDPOINT` kan overstyres i isolerte tester.

Hver varsling inneholder navn, e-post, valgfritt telefonnummer, bedrift,
fagområde og bedriftsstørrelse. Svar-til-adressen settes til interessentens
e-post, slik at oppfølging kan gjøres direkte fra innboksen.
