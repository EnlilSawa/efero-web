'use client'
import { useState } from 'react'
import Link from 'next/link'
import { DEMO_LINK } from '@/lib/links'
import {
  CORE_PACKAGE_FEATURES,
  EXTRA_FIELD_USER_PRICE,
  OPTIONAL_MODULES,
  PRICING_PLANS,
  PRICING_TERMS,
} from '@/lib/pricing'

// ── Types ───────────────────────────────────────────────────────────────────

type Plan = {
  name: string
  price: string
  teamLabel: string
  desc: string
  features: string[]
  cta: string
  featured: boolean
  outline: boolean
}

// ── Data ────────────────────────────────────────────────────────────────────

const plans: Plan[] = PRICING_PLANS.map((plan, index) => ({
  name: plan.name,
  price: plan.price,
  teamLabel: plan.teamLabel,
  desc: plan.description,
  features: [...plan.features],
  cta: 'Book en demo',
  featured: index === 1,
  outline: index !== 1,
}))

const included = [
  PRICING_TERMS.trial,
  PRICING_TERMS.setup,
  PRICING_TERMS.cancellation,
  PRICING_TERMS.support,
  'Norsk MVA og sikker lagring av bedriftsdata',
]

const faqItems = [
  {
    q: 'Hva koster Efero?',
    a: 'Liten koster 690 kr/mnd for inntil 3 feltbrukere, Middels 1 490 kr/mnd for inntil 8 og Stor 2 490 kr/mnd for inntil 15. Alle priser er per bedrift og eks. mva.',
  },
  {
    q: 'Hva skjer etter 30 dager gratis?',
    a: 'Du velger selv om du vil fortsette. Vi sender deg en e-post før prøveperioden utløper. Ingen automatisk trekk uten at du aktivt velger en pakke.',
  },
  {
    q: 'Kan jeg bytte pakke?',
    a: 'Ja. Du kan oppgradere eller nedgradere med virkning fra neste faktureringsperiode.',
  },
  {
    q: 'Hva koster det per ekstra feltbruker?',
    a: `Når Stor-pakken ikke er stor nok, koster hver ekstra feltbruker ${EXTRA_FIELD_USER_PRICE} eks. mva. Kontor- og støttebrukere avklares i tilbudet.`,
  },
  {
    q: 'Er det bindingstid?',
    a: 'Nei. Efero faktureres månedlig og kan sies opp før neste faktureringsperiode. Det er ingen etableringsavgift.',
  },
  {
    q: 'Hva er inkludert, og hva er valgfritt?',
    a: 'Grunnpakken dekker den daglige flyten fra kunde og planlegging til timer, tilbud og fakturagrunnlag. HMS/kvalitet, grossistpriser, service, utvidet prosjektøkonomi og integrasjoner er valgfrie moduler. Dere får skriftlig totalpris før oppstart.',
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

function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="max-w-[720px] mx-auto">
      {faqItems.map((item, i) => (
        <div key={i} className="border-b border-border">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left gap-6"
          >
            <span className="text-[16px] font-semibold text-navy">{item.q}</span>
            <svg
              className={`w-5 h-5 text-slate flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8}
            >
              <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {open === i && (
            <p className="text-[15px] text-slate leading-[1.7] pb-5 pr-10">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Priser() {
  return (
    <>
      {/* ── Hero — navy ─────────────────────────────────────────── */}
      <section className="bg-navy border-b border-white/10 py-24 px-6">
        <div className="max-w-[640px] mx-auto text-center">

          <div className="inline-flex items-center bg-eblue text-white text-[12px] font-semibold px-4 py-1.5 rounded-full mb-8">
            Modulbasert prising
          </div>

          <h1 className="text-[48px] font-semibold text-white leading-[1.15] tracking-tight mb-5">
            Velg pakken som<br />passer din bedrift
          </h1>

          <p className="text-[17px] text-white/60 leading-relaxed mb-16">
            Start fra 690 kr/mnd eks. mva. Velg en grunnpakke og legg bare til modulene bedriften faktisk trenger.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-12">
            {[
              { value: '30 dager', label: 'Gratis prøveperiode' },
              { value: '0 kr',     label: 'Etableringsgebyr' },
              { value: 'Ingen',    label: 'Bindingstid' },
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
                  <p className="text-[24px] leading-tight font-semibold text-eblue mb-2">{plan.price}</p>
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
                      : 'bg-eblue text-white hover:bg-blue-500'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-[720px] rounded-[14px] border border-border bg-lgray p-5 text-center">
            <p className="text-[16px] font-semibold text-navy">Trenger dere mer enn 15 feltbrukere?</p>
            <p className="mt-1 text-[14px] text-slate">Legg til flere for {EXTRA_FIELD_USER_PRICE} per feltbruker, eks. mva. Ingen brå overgang til en skjult storbedriftspakke.</p>
          </div>
          <p className="mt-5 text-center text-[14px] text-slate">Alle priser er per bedrift per måned, eks. mva. Grunnpakken er inkludert. Valgfrie moduler prises etter behov, og dere får alltid skriftlig totalpris før oppstart.</p>
        </div>
      </section>

      <section className="bg-white border-b border-border py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-eblue">Grunnpakken</p>
              <h2 className="mt-3 text-[30px] font-semibold tracking-tight text-navy">Hele den daglige arbeidsflyten er med</h2>
              <p className="mt-3 text-[15px] leading-7 text-slate">Du kjøper ikke et tomt skall. Alle tre pakkene inkluderer verktøyene bedriften trenger fra kundehenvendelse til fakturagrunnlag.</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {CORE_PACKAGE_FEATURES.map(feature => <li className="flex items-start gap-2.5" key={feature}><Check /><span className="text-[14px] text-charcoal">{feature}</span></li>)}
              </ul>
            </div>
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-eblue">Valgfrie moduler</p>
              <h2 className="mt-3 text-[30px] font-semibold tracking-tight text-navy">Betal bare for det dere faktisk trenger</h2>
              <div className="mt-7 grid gap-3">
                {OPTIONAL_MODULES.map(module => <div className="rounded-[12px] border border-border p-4" key={module.name}><p className="text-[15px] font-semibold text-navy">{module.name}</p><p className="mt-1 text-[13px] leading-5 text-slate">{module.description}</p></div>)}
              </div>
              <p className="mt-4 text-[13px] leading-5 text-slate">Modulpris avhenger av valgt pakke og behov. Ingen modul aktiveres uten at pris og omfang er bekreftet skriftlig.</p>
            </div>
          </div>
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
          <PricingFAQ />
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
              className="h-11 px-6 rounded-[8px] bg-eblue text-white text-[15px] font-semibold flex items-center hover:bg-blue-500 transition-colors"
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
