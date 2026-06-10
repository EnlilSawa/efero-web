import Link from 'next/link'
import Image from 'next/image'
import { DashboardMockup } from '@/components/AppMockup'
import { InteractiveDemo } from '@/components/InteractiveDemo'
import { HomeContactForm } from '@/components/HomeContactForm'
import { AnimatedSection } from '@/components/AnimatedSection'
import { MobilePreview } from '@/components/MobilePreview'
import { DEMO_LINK } from '@/lib/links'

export const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Efero',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  description: 'Jobbstyring og fakturering for norske håndverkere',
  url: 'https://efero.app',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '3',
  },
}

// ── Priser ────────────────────────────────────────────────────────────────────

const pricingPlans = [
  { name: 'Liten',   teamLabel: '1–3 teknikere',   price: '399 kr',   featured: false },
  { name: 'Middels', teamLabel: '4–10 teknikere',  price: '899 kr',   featured: true },
  { name: 'Stor',    teamLabel: '11–20 teknikere', price: '1 499 kr', featured: false },
]

const pricingFeatures = [
  'Alle funksjoner inkludert',
  'Ubegrenset antall jobber og fakturaer',
  '30 dager gratis prøveperiode',
]

// ── Page ──────────────────────────────────────────────────────────────────────

export function HomeContent() {
  return (
    <>
      {/* ── HERO — bakgrunnsbilde ─────────────────────────────── */}
      <section className="bg-navy border-b border-white/10 relative overflow-hidden flex items-center" style={{ minHeight: '90vh' }}>

        {/* Bakgrunnsbilde */}
        <Image
          src="/hero-bg.jpeg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Lett overlay for lesbarhet */}
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,27,51,0.55)' }}/>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">

          {/* Tekst */}
          <div className="mx-auto text-center flex flex-col items-center">

            <div className="inline-flex items-center bg-eblue text-white text-[12px] font-semibold px-4 py-1.5 rounded-full mb-8">
              Bygget for håndverkere
            </div>

            <h1 className="text-[56px] font-semibold text-white leading-[1.12] tracking-tight mb-7">
              Appen som gir deg<br />kontroll over bedriften.
            </h1>

            <p className="text-[20px] text-white/70 leading-relaxed max-w-[560px] mb-10">
              Efero samler jobber, team og fakturering i én enkel app.
              Fra kundetelefon til betalt faktura — uten papir og Excel.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href={DEMO_LINK}
                className="h-[52px] px-8 rounded-[10px] bg-eblue text-white text-[15px] font-semibold flex items-center hover:bg-blue-500 transition-colors"
              >
                Book en demo
              </Link>
              <Link
                href="#kontakt"
                className="h-[52px] px-8 rounded-[10px] border-2 border-white/30 text-white text-[15px] font-semibold flex items-center hover:border-white transition-colors"
              >
                Prøv gratis i 30 dager
              </Link>
            </div>

            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-7 text-[14px] text-white/60">
              {['30 dager gratis prøveperiode', 'Personlig onboarding inkludert', 'Support 24/7'].map(t => (
                <li key={t} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-eblue flex-shrink-0" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t}
                </li>
              ))}
            </ul>

          </div>

          {/* Mobil-animasjon */}
          <div className="flex justify-center">
            <MobilePreview />
          </div>

        </div>
      </section>

      {/* ── INTERAKTIV DEMO ────────────────────────────────────── */}
      <InteractiveDemo />

      {/* ── OM EFERO — hvit ────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-24 px-6">
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <AnimatedSection>
            <p className="text-[13px] font-semibold text-eblue uppercase tracking-widest mb-4">Om oss</p>
            <h2 className="text-[36px] font-semibold text-navy tracking-tight mb-6 leading-[1.2]">
              Vi bygde verktøyet vi alltid ønsket fantes
            </h2>
            <div className="flex flex-col gap-4 text-[16px] text-slate leading-[1.8]">
              <p>
                Efero er bygget av folk som har sett håndverkere slite med administrasjon for lenge.
              </p>
              <p>
                Rørleggere, elektrikere, snekkere, malere, VVS-montører — alle er eksperter på sitt håndverk.
                Ingen skal måtte bruke timer på fakturaark og tungvinte systemer.
              </p>
              <p>
                Vi laget Efero for å gi alle norske håndverkere et verktøy som faktisk fungerer i hverdagen — uansett fag.
              </p>
            </div>
          </AnimatedSection>

          {/* Right — value grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth={1.8}/>,
                title: 'Pålitelig',
                text: 'Bygget for norske regler og norsk MVA. Fungerer hver dag.',
              },
              {
                icon: <><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth={1.8}/></>,
                title: 'Effektivt',
                text: 'Opprett jobb på 20 sekunder. Faktura genereres automatisk.',
              },
              {
                icon: <><circle cx="12" cy="12" r="3" strokeWidth={1.8}/><path d="M2 12h3m14 0h3M12 2v3m0 14v3" strokeWidth={1.8}/></>,
                title: 'Nordisk',
                text: 'Laget i Norge, for norske håndverkere. Vi forstår hverdagen din.',
              },
              {
                icon: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeWidth={1.8}/><circle cx="12" cy="7" r="4" strokeWidth={1.8}/></>,
                title: 'Menneskelig',
                text: 'Snakk med oss direkte. Vi er her når du trenger hjelp.',
              },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 80}>
                <div className="bg-lgray rounded-[12px] p-6">
                  <svg className="w-9 h-9 text-eblue mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    {v.icon}
                  </svg>
                  <p className="text-[15px] font-semibold text-navy mb-2">{v.title}</p>
                  <p className="text-[13px] text-slate leading-relaxed">{v.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRISER — hvit ──────────────────────────────────────── */}
      <section className="bg-white border-b border-border py-24 px-6">
        <div className="max-w-site mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-[36px] font-semibold text-navy tracking-tight mb-4">
                Enkel og ærlig pris
              </h2>
              <p className="text-[18px] text-slate">
                Ingen bindingstid. Ingen oppstartskostnad. Avslutt når du vil.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 80}>
                <div
                  className={`rounded-[16px] p-8 flex flex-col relative h-full ${
                    plan.featured ? 'border-2 border-eblue md:-translate-y-2' : 'border border-border'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="bg-eblue text-white text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                        Mest valgt
                      </span>
                    </div>
                  )}

                  <p className="text-[15px] font-semibold text-navy mb-1">{plan.name}</p>
                  <p className="text-[14px] text-slate mb-6">{plan.teamLabel}</p>

                  <div className="flex items-end gap-1.5">
                    <span className="text-[40px] font-semibold text-navy leading-none">{plan.price}</span>
                    <span className="text-[16px] text-slate mb-1">/mnd</span>
                  </div>
                  <p className="text-[13px] text-slate mb-6">Eks. mva</p>

                  <div className="h-px bg-border mb-6"/>

                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {pricingFeatures.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-[14px] text-charcoal">
                        <span className="text-eblue font-semibold">→</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={DEMO_LINK}
                    className="h-12 w-full rounded-[8px] bg-eblue text-white text-[14px] font-semibold flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    Book en demo
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TALL-STRIP — navy ──────────────────────────────────── */}
      <section className="bg-navy border-b border-white/10 py-16 px-6">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-x divide-white/10 border border-white/10 rounded-[14px] overflow-hidden">
            {[
              { value: '20 sek',    label: 'Tid for å opprette jobb' },
              { value: '30 dager',  label: 'Gratis prøveperiode' },
              { value: '24t',       label: 'Support responstid' },
            ].map(s => (
              <div key={s.value} className="text-center py-10 px-6">
                <div className="text-[40px] font-semibold text-white mb-2">{s.value}</div>
                <div className="text-[13px] text-white/55">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLI EN AV DE 20 FØRSTE — lys grå ───────────────────── */}
      <section className="bg-lgray border-b border-border py-24 px-6">
        <div className="max-w-site mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-[36px] font-semibold text-navy tracking-tight mb-6">
              Bli en av de 20 første
            </h2>
            <p className="text-[18px] text-slate leading-relaxed max-w-[600px] mx-auto mb-10">
              Efero lanseres nå, og vi ser etter 20 håndverksbedrifter som vil være
              med å forme produktet. De første kundene får egne betingelser, gratis
              oppsett og direktelinje til gründeren. Book en demo, så forteller vi mer.
            </p>
            <Link
              href={DEMO_LINK}
              className="inline-flex h-[56px] px-10 rounded-[10px] bg-eblue text-white text-[16px] font-semibold items-center justify-center hover:bg-blue-500 transition-colors"
            >
              Book en 15-minutters demo
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── KONTAKT — lys grå ──────────────────────────────────── */}
      <HomeContactForm />

      {/* Tillitsboks */}
      <div className="bg-lgray border-b border-border py-8 px-6">
        <div className="max-w-sm mx-auto bg-white rounded-[12px] border border-border px-6 py-5 text-center">
          <p className="text-[14px] font-semibold text-navy mb-4">Det inkluderer:</p>
          <ul className="flex flex-col gap-2.5">
            {[
              'Gratis prøveperiode i 30 dager',
              'Personlig onboarding-hjelp',
              'Support 24/7',
            ].map(item => (
              <li key={item} className="flex items-center justify-center gap-2 text-[13px] text-slate">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      {/* ── CTA — navy ─────────────────────────────────────────── */}
      <section id="kom-i-gang" className="bg-navy py-24 px-6">
        <div className="max-w-[560px] mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-[44px] font-semibold text-white tracking-tight mb-5">
              Klar til å prøve Efero?
            </h2>
            <p className="text-[18px] text-white/70 leading-relaxed mb-10">
              30 dager gratis prøveperiode.<br />
              Personlig onboarding inkludert.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href={DEMO_LINK}
                className="h-[52px] px-8 rounded-[10px] bg-eblue text-white text-[15px] font-semibold flex items-center hover:bg-blue-500 transition-colors"
              >
                Book en demo
              </Link>
              <Link
                href="#"
                className="h-[52px] px-8 rounded-[10px] border-2 border-white/30 text-white text-[15px] font-semibold flex items-center hover:border-white transition-colors"
              >
                Last ned appen
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
