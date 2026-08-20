# Venteliste

Ventelisten ligger på `/venteliste` og poster kontaktdata til `/api/waitlist`.
Innsendingen valideres på serveren, har en skjult spamfelle og krever eksplisitt
samtykke. Kontakten opprettes eller oppdateres i Resend-segmentet `Efero
venteliste`. En formatert lead-varsling sendes også med samme Resend-oppsett som
de andre skjemaene på efero.no.

## Miljøvariabler

- `RESEND_API_KEY` er påkrevd.
- `WAITLIST_NOTIFICATION_EMAIL` bestemmer mottaker og faller tilbake til
  `CONTACT_NOTIFICATION_EMAIL`, deretter `kontakt@efero.no`.
- `WAITLIST_FROM_EMAIL` bestemmer avsender og faller tilbake til
  `CONTACT_FROM_EMAIL`, deretter `Efero <noreply@efero.no>`.
- `WAITLIST_RESEND_SEGMENT_ID` kan overstyre standardsegmentet i Resend.
- `RESEND_API_BASE_URL` kan overstyres i isolerte Contacts-tester.
- `RESEND_API_ENDPOINT` kan overstyres i isolerte tester.

Hver kontakt inneholder navn, e-post, valgfritt telefonnummer, bedrift,
fagområde og bedriftsstørrelse. Du finner listen i Resend under **Contacts →
Segments → Efero venteliste**. E-postvarslingens svar-til-adresse settes til
interessentens e-post, slik at oppfølging kan gjøres direkte fra innboksen.
