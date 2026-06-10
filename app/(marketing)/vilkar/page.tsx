import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vilkår og betingelser — Efero',
  description: 'Les vilkår og betingelser for bruk av Efero — programvaretjeneste for norske håndverkerbedrifter.',
  alternates: { canonical: 'https://efero.app/vilkar' },
}

export default function VilkarPage() {
  return (
    <main style={{ backgroundColor: '#ffffff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>

        <h1 style={{ color: '#0A1B33', fontSize: 40, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 8 }}>
          Vilkår og betingelser
        </h1>
        <p style={{ color: '#64748B', fontSize: 15, marginBottom: 56 }}>
          Sist oppdatert: Juni 2026
        </p>

        <Section heading="1. Om tjenesten">
          <p>
            Efero er en programvaretjeneste (SaaS) for håndverkerbedrifter i Norge. Tjenesten gir tilgang til jobbstyring, fakturering, tilbudsmodul og teamadministrasjon.
          </p>
          <div style={{ margin: '4px 0', padding: '20px 24px', backgroundColor: '#F5F7FA', borderRadius: 10, borderLeft: '3px solid #2563FF' }}>
            <p style={{ fontWeight: 600, color: '#0A1B33', marginBottom: 6 }}>Efero</p>
            <p><a href="mailto:kontakt@efero.no" style={{ color: '#2563FF' }}>kontakt@efero.no</a></p>
            <p><a href="https://efero.app" style={{ color: '#2563FF' }}>efero.app</a></p>
          </div>
        </Section>

        <Section heading="2. Hvem kan bruke Efero">
          <p>Efero er forbeholdt næringsdrivende. Ved å opprette konto bekrefter du at:</p>
          <List items={[
            'Du representerer en registrert norsk virksomhet',
            'Du er myndig og har fullmakt til å inngå avtaler på virksomhetens vegne',
            'Opplysningene du oppgir er korrekte',
          ]} />
        </Section>

        <Section heading="3. Avtaleperiode og binding">
          <p>
            Abonnementet løper for <strong style={{ color: '#0A1B33' }}>12 måneder</strong> av gangen fra avtaleinngåelse.
          </p>
          <p>
            Oppsigelse må skje skriftlig til{' '}
            <a href="mailto:kontakt@efero.no" style={{ color: '#2563FF' }}>kontakt@efero.no</a>{' '}
            med <strong style={{ color: '#0A1B33' }}>3 måneders varsel</strong> før avtaleperiodens utløp.
          </p>
          <p>
            Ved manglende oppsigelse fornyes avtalen automatisk for en ny 12-månedersperiode.
          </p>
          <p>
            Prøveperioden på 30 dager er gratis og uforpliktende. Binding starter først ved aktivering av betalt abonnement.
          </p>
        </Section>

        <Section heading="4. Pris og betaling">
          <p>Pris avtales ved inngåelse av abonnement.</p>
          <p>
            Fakturering skjer månedlig eller årlig etter avtale. Betalingsfrist er 14 dager fra fakturadato.
          </p>
          <p>
            Ved forsinket betaling påløper forsinkelsesrente i henhold til forsinkelsesrenteloven.
          </p>
          <p>
            Vi forbeholder oss retten til å justere priser med{' '}
            <strong style={{ color: '#0A1B33' }}>30 dagers skriftlig varsel.</strong>
          </p>
        </Section>

        <Section heading="5. Etableringsgebyr">
          <p>
            Ved oppstart av nytt abonnement påløper et etableringsgebyr. Størrelsen avtales ved inngåelse. Etableringsgebyret refunderes ikke ved oppsigelse.
          </p>
        </Section>

        <Section heading="6. Prøveperiode">
          <p>
            Nye kunder får 30 dagers gratis prøveperiode. Prøveperioden gir full tilgang til alle funksjoner.
          </p>
          <p>
            Prøveperioden avsluttes automatisk etter 30 dager. Ønsker du å fortsette må du aktivere et betalt abonnement.
          </p>
        </Section>

        <Section heading="7. Tilgjengelighet">
          <p>
            Vi tilstreber høy tilgjengelighet for tjenesten, men garanterer ikke 100% tilgjengelighet.
          </p>
          <p>
            Planlagt vedlikehold varsles i god tid. Vi er ikke ansvarlige for tap som følge av nedetid.
          </p>
        </Section>

        <Section heading="8. Dine data">
          <p>
            Du eier alle data du legger inn i Efero — kundedata, fakturaer, jobber og bilder.
          </p>
          <p>
            Ved oppsigelse kan du eksportere dine data innen 30 dager etter avtalens slutt. Etter 30 dager slettes dataene.
          </p>
          <p>
            Fakturaer oppbevares i 5 år i henhold til bokføringsloven, selv etter oppsigelse.
          </p>
        </Section>

        <Section heading="9. Brukerbegrensninger">
          <p>Du forplikter deg til å ikke:</p>
          <List items={[
            'Dele innloggingsdetaljer med uautoriserte personer',
            'Bruke tjenesten til ulovlige formål',
            'Forsøke å få uautorisert tilgang til andres data',
            'Reverse-engineere eller kopiere tjenesten',
          ]} />
        </Section>

        <Section heading="10. Ansvarsbegrensning">
          <p>Efero er ikke ansvarlig for:</p>
          <List items={[
            'Indirekte tap eller følgeskader',
            'Tap som følge av feil i data du selv har lagt inn',
            'Tap som følge av at du ikke overholder norsk bokførings- eller skattelovgivning',
          ]} />
          <p>
            Vårt totale ansvar er begrenset til beløpet du har betalt for tjenesten de siste 3 månedene.
          </p>
        </Section>

        <Section heading="11. Immaterielle rettigheter">
          <p>
            Efero og alt innhold i tjenesten — programvare, design, logo og varemerker — eies av Efero.
          </p>
          <p>
            Du gis en begrenset, ikke-eksklusiv lisens til å bruke tjenesten i henhold til disse vilkårene.
          </p>
        </Section>

        <Section heading="12. Endringer i vilkårene">
          <p>
            Vi kan oppdatere disse vilkårene. Ved vesentlige endringer varsler vi deg på e-post minst 30 dager før endringen trer i kraft.
          </p>
          <p>
            Fortsatt bruk av tjenesten etter varselet anses som aksept av de nye vilkårene.
          </p>
        </Section>

        <Section heading="13. Oppsigelse fra vår side">
          <p>Vi kan si opp avtalen med umiddelbar virkning dersom:</p>
          <List items={[
            'Du vesentlig misligholder disse vilkårene',
            'Du ikke betaler innen 30 dager etter purring',
            'Vi har rimelig grunn til å tro at tjenesten misbrukes',
          ]} />
        </Section>

        <Section heading="14. Gjeldende lov og verneting">
          <p>Denne avtalen er underlagt norsk rett.</p>
          <p>
            Tvister søkes løst i minnelighet. Dersom dette ikke lykkes, er Kristiansand tingrett avtalt verneting.
          </p>
        </Section>

        <Section heading="15. Kontakt" last>
          <p>
            Spørsmål om vilkårene?{' '}
            <a href="mailto:kontakt@efero.no" style={{ color: '#2563FF' }}>kontakt@efero.no</a>
          </p>
          <p>Vi behandler henvendelser innen 5 virkedager.</p>
        </Section>

      </div>
    </main>
  )
}

function Section({ heading, children, last = false }: { heading: string; children: React.ReactNode; last?: boolean }) {
  return (
    <section style={{ marginBottom: last ? 0 : 48, paddingBottom: last ? 0 : 48, borderBottom: last ? 'none' : '1px solid #E2E8F0' }}>
      <h2 style={{ color: '#0A1B33', fontSize: 22, fontWeight: 600, marginBottom: 20, letterSpacing: '-0.01em' }}>
        {heading}
      </h2>
      <div style={{ color: '#64748B', fontSize: 16, lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {children}
      </div>
    </section>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
      {items.map(item => (
        <li key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <span style={{ color: '#2563FF', marginTop: 4, flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
