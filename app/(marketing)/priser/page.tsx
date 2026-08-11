import type { Metadata } from 'next'
import Link from 'next/link'
import { FaqAccordion } from '@/components/FaqAccordion'
import { DEMO_LINK } from '@/lib/links'
import { breadcrumbSchema, faqSchema, pageMeta, SITE_NAME, SITE_URL } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Priser',
  description:
    'Priser for Efero: pakker for små, mellomstore og store håndverksbedrifter. 30 dager gratis prøveperiode, gratis oppsett og ingen bindingstid.',
  path: '/priser',
  keywords: [
    'pris ordresystem håndverker',
    'timeføring pris',
    'håndverkerprogram pris',
    'abonnement uten bindingstid',
  ],
})

// ── Types ───────────────────────────────────────────────────────────────────

type Plan = {
  name: string
  teamLabel: string
  desc: string
  features: string[]
  cta: string
  featured: boolean
  outline: boolean
}

// ── Data ────────────────────────────────────────────────────────────────────

const plans: Plan[] = [
  {
    name: 'Liten',
    teamLabel: 'Opp til 3 teknikere',
    desc: 'Perfekt for små bedrifter med inntil 3 teknikere.',
    features: [
      'Opp til 3 teknikere',
      'Jobbstyring',
      'Automatisk faktura',
      'Tilbudsmodul',
      'Kunderegister',
      'Jobbarkiv med bilder',
      'Support',
    ],
    cta: 'Book en demo',
    featured: false,
    outline: true,
  },
  {
    name: 'Middels',
    teamLabel: 'Opp til 8 teknikere',
    desc: 'For bedrifter i vekst med inntil 8 teknikere.',
    features: [
      'Opp til 8 teknikere',
      'Alt i Liten-pakken',
      'Prioritert support',
      'Månedlig rapport',
      'Eksport til PDF',
    ],
    cta: 'Book en demo',
    featured: true,
    outline: false,
  },
  {
    name: 'Stor',
    teamLabel: 'Ubegrenset teknikere',
    desc: 'For større lag uten begrensninger.',
    features: [
      'Ubegrenset teknikere',
      'Alt i Middels-pakken',
      'Dedikert onboarding-hjelp',
      'Tilpassede rapporter',
    ],
    cta: 'Book en demo',
    featured: false,
    outline: true,
  },
]

const included = [
  '30 dagers gratis prøveperiode',
  'Mva utregning automatisk',
  'Automatisk faktura',
  'Mobilapp for admin og teknikere',
  'E-post support',
]

const faqItems = [
  {
    q: 'Hva koster Efero?',
    a: 'Prisen avhenger av hvor mange teknikere dere er. Vi har tre pakker — Liten (opptil 3 teknikere), Middels (opptil 8) og Stor (ubegrenset). Ta kontakt, så får du pris tilpasset bedriften.',
  },
  {
    q: 'Hva skjer etter 30 dager gratis?',
    a: 'Du velger selv om du vil fortsette. Vi sender deg en e-post før prøveperioden utløper. Ingen automatisk trekk uten at du aktivt velger en pakke.',
  },
  {
    q: 'Kan jeg bytte pakke?',
    a: 'Ja. Du kan oppgradere eller nedgradere når som helst fra innstillingene i appen. Endringen trer i kraft ved neste faktureringsdato.',
  },
  {
    q: 'Hva koster det per ekstra tekniker over grensen?',
    a: 'Oppgrader til neste pakke for å legge til flere teknikere. Vi jobber med fleksible løsninger for større team — ta kontakt for skreddersøm.',
  },
  {
    q: 'Er det bindingstid?',
    a: 'Nei. Efero betales månedlig, og du kan avslutte når du vil.',
  },
  {
    q: 'Får jeg faktura for abonnementet?',
    a: 'Ja. Du mottar faktura på e-post hver måned. MVA-spesifisert og klar for regnskapet.',
  },
]

// ── Sub-components ───────────────────────────────────────────────────────────

function Check() {
  return (
    <svg className="w-[18px] h-[18px] flex-shrink-0 text-eblue" viewBox="0 0 18 18" fill="none">
      <path d="M3.5 9.5l4 4 7-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ── Structured data ──────────────────────────────────────────────────────────

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `${SITE_NAME} — ordre- og timesystem`,
  url: `${SITE_URL}/priser`,
  brand: { '@type': 'Brand', name: SITE_NAME },
  description:
    'Ordre-, time- og fakturasystem for norske håndverksbedrifter. Tre pakker etter antall teknikere, med 30 dagers gratis prøveperiode.',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'NOK',
    offerCount: plans.length,
    availability: 'https://schema.org/InStock',
    offers: plans.map(plan => ({
      '@type': 'Offer',
      name: `${plan.name} — ${plan.teamLabel.toLowerCase()}`,
      priceCurrency: 'NOK',
      url: `${SITE_URL}/priser`,
    })),
  },
}

const breadcrumbs = breadcrumbSchema([
  { name: 'Hjem', path: '/' },
  { name: 'Priser', path: '/priser' },
])

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Priser() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {/* ── Hero — navy ─────────────────────────────────────────── */}
      <section className="bg-navy border-b border-white/10 py-24 px-6">
        <div className="max-w-[640px] mx-auto text-center">

          <div className="inline-flex items-center bg-eblue text-white text-[12px] font-semibold px-4 py-1.5 rounded-full mb-8">
            Enkel og transparent prising
          </div>

          <h1 className="text-[48px] font-semibold text-white leading-[1.15] tracking-tight mb-5">
            Velg pakken som<br />passer din bedrift
          </h1>

          <p className="text-[17px] text-white/60 leading-relaxed mb-16">
            Ingen skjulte kostnader. Transparent prising.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-12">
            {[
              { value: '30 dager', label: 'Gratis prøveperiode' },
              { value: 'Gratis',   label: 'Oppsett' },
              { value: '24t',      label: 'Support responstid' },
            ].map(s => (
              <div key={s.value} className="text-center">
                <div className="text-[32px] font-semibold text-white mb-1">{s.value}</div>
                <div className="text-[13px] text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pakkekort ───────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-[16px] p-8 flex flex-col relative ${
                  plan.featured
                    ? 'border-2 border-eblue md:-translate-y-2'
                    : 'border border-border'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-eblue text-white text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      Mest populær
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-[18px] font-semibold text-navy mb-4">{plan.name}</p>
                  <p className="text-[18px] font-semibold text-navy mb-1">{plan.teamLabel}</p>
                </div>

                <p className="text-[14px] text-slate leading-relaxed mb-6">{plan.desc}</p>

                <div className="h-px bg-border mb-6"/>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5">
                      <Check />
                      <span className="text-[14px] text-charcoal">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={DEMO_LINK}
                  className={`h-12 w-full rounded-[8px] flex items-center justify-center text-[14px] font-semibold transition-colors ${
                    plan.outline
                      ? 'border-2 border-navy text-navy hover:bg-navy hover:text-white'
                      : 'bg-eblue text-white hover:bg-[#00654e]'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-[14px] text-slate">Ta kontakt for pris</p>
        </div>
      </section>

      {/* ── Alle pakker inkluderer ───────────────────────────────── */}
      <section className="bg-lgray border-b border-border py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[28px] font-semibold text-navy text-center tracking-tight mb-12">
            Alle pakker inkluderer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {included.map(item => (
              <div key={item} className="flex items-center gap-3">
                <Check />
                <span className="text-[15px] text-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-24 px-6">
        <div className="max-w-[720px] mx-auto">
          <h2 className="text-[36px] font-semibold text-navy tracking-tight text-center mb-14">
            Ofte stilte spørsmål om priser
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-[480px] mx-auto text-center">
          <h2 className="text-[32px] font-semibold text-white tracking-tight mb-4">
            Usikker på hvilken pakke?
          </h2>
          <p className="text-[16px] text-white/60 leading-relaxed mb-10">
            Start med Liten-pakken.<br />
            Du kan alltid oppgradere når bedriften vokser.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href={DEMO_LINK}
              className="h-11 px-6 rounded-[8px] bg-eblue text-white text-[15px] font-semibold flex items-center hover:bg-[#00654e] transition-colors"
            >
              Book en demo
            </Link>
            <Link
              href="/#kontakt"
              className="h-11 px-6 rounded-[8px] border-2 border-white/30 text-white text-[15px] font-semibold flex items-center hover:border-white transition-colors"
            >
              Ta kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
