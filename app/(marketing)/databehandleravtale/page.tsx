import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Databehandleravtale — Efero',
  description: 'Databehandleravtale (DBA) mellom Efero og deg som kunde, i henhold til GDPR artikkel 28.',
  alternates: { canonical: 'https://efero.app/databehandleravtale' },
}

export default function DatabehandleravtalePage() {
  return (
    <main style={{ backgroundColor: '#ffffff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>

        <h1 style={{ color: '#0A1B33', fontSize: 40, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 8 }}>
          Databehandleravtale
        </h1>
        <p style={{ color: '#64748B', fontSize: 15, marginBottom: 24 }}>
          Sist oppdatert: Juni 2026
        </p>
        <p style={{ color: '#64748B', fontSize: 16, lineHeight: 1.75, marginBottom: 56 }}>
          Denne databehandleravtalen ("DBA") er en del av avtaleforholdet mellom deg som kunde ("Behandlingsansvarlig") og Efero ("Databehandler"). Avtalen regulerer hvordan Efero behandler personopplysninger på dine vegne, i henhold til GDPR artikkel 28.
        </p>

        <Section heading="1. Partene">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ padding: '16px 20px', backgroundColor: '#F5F7FA', borderRadius: 10, borderLeft: '3px solid #64748B' }}>
              <p style={{ fontWeight: 600, color: '#0A1B33', marginBottom: 4 }}>Behandlingsansvarlig</p>
              <p>Din virksomhet — registrert ved opprettelse av Efero-konto.</p>
            </div>
            <div style={{ padding: '16px 20px', backgroundColor: '#F5F7FA', borderRadius: 10, borderLeft: '3px solid #2563FF' }}>
              <p style={{ fontWeight: 600, color: '#0A1B33', marginBottom: 4 }}>Databehandler</p>
              <p>Efero</p>
              <p><a href="mailto:kontakt@efero.no" style={{ color: '#2563FF' }}>kontakt@efero.no</a></p>
              <p><a href="https://efero.app" style={{ color: '#2563FF' }}>efero.app</a></p>
            </div>
          </div>
        </Section>

        <Section heading="2. Formål og omfang">
          <p>Efero behandler personopplysninger på vegne av den behandlingsansvarlige for å:</p>
          <List items={[
            'Levere jobbstyringstjenesten',
            'Generere og sende fakturaer',
            'Sende tilbud til sluttkunder',
            'Lagre kunde- og jobbhistorikk',
          ]} />
          <p>
            Behandlingen skjer utelukkende etter skriftlig instruks fra den behandlingsansvarlige, med mindre annet følger av lov.
          </p>
        </Section>

        <Section heading="3. Hvilke personopplysninger behandles">
          <SubHeading>Kategorier av registrerte:</SubHeading>
          <List items={[
            'Dine kunder (navn, adresse, telefon, e-post)',
            'Dine ansatte/teknikere (navn, telefon, jobbhistorikk)',
          ]} />
          <SubHeading>Kategorier av opplysninger:</SubHeading>
          <List items={[
            'Kontaktinformasjon',
            'Jobbhistorikk og notater',
            'Fakturaopplysninger',
            'Bilder lastet opp til jobber',
          ]} />
          <div style={{ padding: '14px 18px', backgroundColor: '#FEF3C7', borderRadius: 10, borderLeft: '3px solid #F59E0B' }}>
            <p style={{ color: '#92400E', fontWeight: 600, fontSize: 14 }}>
              Ingen sensitive personopplysninger (helseopplysninger, politisk overbevisning etc.) skal lagres i Efero.
            </p>
          </div>
        </Section>

        <Section heading="4. Varighet">
          <p>
            Avtalen gjelder så lenge Efero behandler personopplysninger på den behandlingsansvarliges vegne, det vil si i hele abonnementsperioden.
          </p>
        </Section>

        <Section heading="5. Databehandlers plikter">
          <p>Efero forplikter seg til å:</p>
          <List items={[
            'Kun behandle personopplysninger etter dokumentert instruks fra den behandlingsansvarlige',
            'Sikre at ansatte med tilgang til dataene er underlagt taushetsplikt',
            'Iverksette tekniske og organisatoriske sikkerhetstiltak i henhold til GDPR artikkel 32',
            'Bistå den behandlingsansvarlige med å oppfylle de registrertes rettigheter (innsyn, sletting etc.)',
            'Varsle den behandlingsansvarlige uten ugrunnet opphold ved brudd på personopplysningssikkerheten',
            'Slette eller tilbakelevere alle personopplysninger ved avtalens opphør etter den behandlingsansvarliges valg',
            'Gi den behandlingsansvarlige all informasjon som er nødvendig for å påvise at pliktene overholdes',
          ]} />
        </Section>

        <Section heading="6. Underleverandører">
          <p>Efero benytter følgende underleverandører (under-databehandlere):</p>
          <div style={{ border: '1px solid #E2E8F0', borderRadius: 10, overflow: 'hidden', margin: '4px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', backgroundColor: '#F5F7FA', padding: '10px 16px' }}>
              <span style={{ color: '#0A1B33', fontWeight: 600, fontSize: 13 }}>Leverandør</span>
              <span style={{ color: '#0A1B33', fontWeight: 600, fontSize: 13 }}>Formål</span>
              <span style={{ color: '#0A1B33', fontWeight: 600, fontSize: 13 }}>Land</span>
            </div>
            {[
              { name: 'Supabase', purpose: 'Databaselagring', country: 'EU (Frankfurt)' },
              { name: 'Stripe', purpose: 'Betalingsbehandling', country: 'EU' },
              { name: 'Resend', purpose: 'E-postutsending', country: 'EU' },
            ].map((row, i) => (
              <div key={row.name} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', padding: '12px 16px', backgroundColor: i % 2 === 0 ? '#ffffff' : '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
                <span style={{ color: '#0A1B33', fontWeight: 600, fontSize: 14 }}>{row.name}</span>
                <span style={{ color: '#64748B', fontSize: 14 }}>{row.purpose}</span>
                <span style={{ color: '#64748B', fontSize: 14 }}>{row.country}</span>
              </div>
            ))}
          </div>
          <p>Alle underleverandører er bundet av databehandleravtaler og behandler data kun i EU/EØS.</p>
          <p>
            Den behandlingsansvarlige gir med dette en generell tillatelse til bruk av underleverandører. Efero varsler om endringer med 30 dagers varsel slik at den behandlingsansvarlige kan protestere mot endringen.
          </p>
        </Section>

        <Section heading="7. Overføring til tredjeland">
          <p>
            Personopplysninger overføres ikke til land utenfor EU/EØS uten at det foreligger et gyldig overføringsgrunnlag i henhold til GDPR kapittel V.
          </p>
        </Section>

        <Section heading="8. Sikkerhetstiltak">
          <p>Efero har iverksatt følgende tekniske sikkerhetstiltak:</p>
          <List items={[
            'Kryptering av data i overføring (TLS 1.2+)',
            'Kryptering av data i hvile',
            'Tilgangskontroll per bedrift (Row Level Security)',
            'Tofaktorautentisering for administratorer',
            'Regelmessige sikkerhetsvurderinger',
            'Automatiske sikkerhetskopier',
          ]} />
        </Section>

        <Section heading="9. Brudd på personopplysningssikkerheten">
          <p>
            Ved brudd på personopplysningssikkerheten varsler Efero den behandlingsansvarlige innen 24 timer etter at bruddet er oppdaget.
          </p>
          <p>Varselet inneholder:</p>
          <List items={[
            'Beskrivelse av bruddet',
            'Kategorier og omtrentlig antall berørte registrerte',
            'Sannsynlige konsekvenser',
            'Tiltak som er iverksatt',
          ]} />
        </Section>

        <Section heading="10. Den registrertes rettigheter">
          <p>Den behandlingsansvarlige er ansvarlig for å håndtere henvendelser fra registrerte.</p>
          <p>Efero bistår den behandlingsansvarlige med teknisk tilrettelegging for:</p>
          <List items={[
            'Innsyn i egne data',
            'Retting av feilaktige data',
            'Sletting av data',
            'Dataportabilitet',
          ]} />
        </Section>

        <Section heading="11. Revisjon">
          <p>
            Den behandlingsansvarlige har rett til å gjennomføre revisjoner av Eferos behandling av personopplysninger, med 30 dagers skriftlig varsel.
          </p>
        </Section>

        <Section heading="12. Avtalens opphør">
          <p>Ved avtalens opphør skal Efero etter den behandlingsansvarliges valg:</p>
          <List items={[
            'Slette alle personopplysninger, eller',
            'Tilbakelevere alle personopplysninger i maskinlesbart format',
          ]} />
          <p>
            Sletting skjer senest 30 dager etter avtalens opphør, med unntak av fakturaer som oppbevares i 5 år i henhold til bokføringsloven.
          </p>
        </Section>

        <Section heading="13. Gjeldende lov">
          <p>Denne avtalen er underlagt norsk rett og GDPR.</p>
        </Section>

        <Section heading="14. Aksept" last>
          <p>
            Denne databehandleravtalen aksepteres ved at du registrerer en konto i Efero og godtar vilkårene ved registrering.
          </p>
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ color: '#0A1B33', fontWeight: 600, fontSize: 15, marginTop: 4, marginBottom: 2 }}>
      {children}
    </p>
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
