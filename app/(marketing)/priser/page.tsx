'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DEMO_LINK } from '@/lib/links'
import {
  CORE_PACKAGE_FEATURES,
  OPTIONAL_MODULES,
  PRICING_FACTORS,
  PRICING_PROMISES,
  PRICING_TERMS,
} from '@/lib/pricing'

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
    a: 'Prisen tilpasses det bedriften faktisk trenger: antall brukere, valgte arbeidsområder og eventuelle integrasjoner. Etter en kort behovsavklaring får dere en tydelig, skriftlig totalpris før dere bestemmer dere.',
  },
  {
    q: 'Hvorfor viser dere ikke én standardpris?',
    a: 'Håndverksbedrifter jobber forskjellig. Noen trenger først og fremst timer og planlegging, mens andre trenger kalkulasjon, HMS, grossistpriser eller prosjektøkonomi. Behovsbasert prising gjør at dere slipper å betale for en unødvendig stor løsning.',
  },
  {
    q: 'Kan vi få hele systemet?',
    a: 'Ja. Hvis dere ønsker hele Efero, setter vi opp en samlet løsning og gir dere én fast totalpris basert på antall brukere og aktuelle integrasjoner.',
  },
  {
    q: 'Hva skjer etter 30 dager gratis?',
    a: 'Dere velger selv om dere vil fortsette. Vi sender en påminnelse før prøveperioden utløper, og det blir ingen automatisk belastning uten en aktiv avtale.',
  },
  {
    q: 'Kan løsningen endres senere?',
    a: 'Ja. Dere kan starte med det viktigste og utvide med flere brukere eller arbeidsområder når behovet endrer seg.',
  },
  {
    q: 'Er det bindingstid?',
    a: 'Nei. Efero faktureres månedlig og kan sies opp før neste faktureringsperiode. Det er ingen etableringsavgift for standard oppstart.',
  },
]

function Check() {
  return (
    <svg className="h-[18px] w-[18px] flex-shrink-0 text-eblue" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M3.5 9.5l4 4 7-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="mx-auto max-w-[720px]">
      {faqItems.map((item, index) => (
        <div key={item.q} className="border-b border-border">
          <button
            onClick={() => setOpen(open === index ? null : index)}
            className="flex w-full items-center justify-between gap-6 py-5 text-left"
            aria-expanded={open === index}
          >
            <span className="text-[16px] font-semibold text-navy">{item.q}</span>
            <svg className={`h-5 w-5 flex-shrink-0 text-slate transition-transform duration-200 ${open === index ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
              <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {open === index && <p className="pb-5 pr-10 text-[15px] leading-[1.7] text-slate">{item.a}</p>}
        </div>
      ))}
    </div>
  )
}

export default function Priser() {
  return (
    <>
      <section className="border-b border-white/10 bg-navy px-6 py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-eblue px-4 py-1.5 text-[12px] font-semibold text-white">
            Behovsbasert prising
          </div>
          <h1 className="mb-5 text-[clamp(40px,6vw,60px)] font-semibold leading-[1.08] tracking-tight text-white">
            Betal for det dere<br className="hidden sm:block" /> faktisk trenger
          </h1>
          <p className="mx-auto mb-12 max-w-[610px] text-[18px] leading-relaxed text-white/65">
            Efero tilpasses arbeidsflyten, størrelsen og behovene deres. Dere får én tydelig totalpris før oppstart – uten unødvendige funksjoner eller overraskelser.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={DEMO_LINK} className="flex h-12 items-center rounded-[8px] bg-eblue px-7 text-[15px] font-semibold text-white transition-colors hover:bg-blue-500">
              Få et prisforslag
            </Link>
            <Link href="/#kontakt" className="flex h-12 items-center rounded-[8px] border border-white/30 px-7 text-[15px] font-semibold text-white transition-colors hover:border-white">
              Snakk med oss
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-10">
            {[
              { value: '30 dager', label: 'Gratis prøveperiode' },
              { value: 'Skriftlig', label: 'Totalpris før oppstart' },
              { value: 'Ingen', label: 'Bindingstid' },
            ].map(item => (
              <div key={item.label} className="text-center">
                <div className="mb-1 text-[clamp(19px,3vw,28px)] font-semibold text-white">{item.value}</div>
                <div className="text-[12px] leading-5 text-white/50">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white px-6 py-24">
        <div className="mx-auto max-w-[1000px]">
          <div className="mx-auto mb-12 max-w-[650px] text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-eblue">Slik settes prisen</p>
            <h2 className="mt-3 text-[36px] font-semibold tracking-tight text-navy">En løsning tilpasset bedriften</h2>
            <p className="mt-4 text-[16px] leading-7 text-slate">En kort behovsavklaring er nok til at vi kan sette sammen riktig omfang og gi dere en forutsigbar totalpris.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PRICING_FACTORS.map((factor, index) => (
              <article key={factor.name} className="rounded-[16px] border border-border bg-lgray p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-eblue text-[14px] font-semibold text-white">{index + 1}</span>
                <h3 className="mt-6 text-[19px] font-semibold text-navy">{factor.name}</h3>
                <p className="mt-3 text-[14px] leading-6 text-slate">{factor.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-[16px] border border-[#b9e6d2] bg-[#eaf8f2] p-6">
            <ul className="grid gap-4 md:grid-cols-3">
              {PRICING_PROMISES.map(promise => <li key={promise} className="flex items-start gap-2.5"><Check /><span className="text-[14px] leading-6 text-charcoal">{promise}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white px-6 py-24">
        <div className="mx-auto grid max-w-[1000px] gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-eblue">Den daglige arbeidsflyten</p>
            <h2 className="mt-3 text-[30px] font-semibold tracking-tight text-navy">Et solid utgangspunkt</h2>
            <p className="mt-3 text-[15px] leading-7 text-slate">Vi starter med arbeidsflyten dere trenger i hverdagen og tilpasser løsningen rundt den.</p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {CORE_PACKAGE_FEATURES.map(feature => <li className="flex items-start gap-2.5" key={feature}><Check /><span className="text-[14px] text-charcoal">{feature}</span></li>)}
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-eblue">Kan utvides</p>
            <h2 className="mt-3 text-[30px] font-semibold tracking-tight text-navy">Velg relevante arbeidsområder</h2>
            <div className="mt-7 grid gap-3">
              {OPTIONAL_MODULES.map(module => <div className="rounded-[12px] border border-border p-4" key={module.name}><p className="text-[15px] font-semibold text-navy">{module.name}</p><p className="mt-1 text-[13px] leading-5 text-slate">{module.description}</p></div>)}
            </div>
            <p className="mt-4 text-[13px] leading-5 text-slate">Ingenting aktiveres før pris og omfang er bekreftet skriftlig.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-lgray px-6 py-20">
        <div className="mx-auto max-w-[720px]">
          <h2 className="mb-10 text-center text-[28px] font-semibold tracking-tight text-navy">Dette er alltid med</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {included.map(item => <div key={item} className="flex items-center gap-3"><Check /><span className="text-[15px] text-charcoal">{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white px-6 py-24">
        <div className="mx-auto max-w-[720px]">
          <h2 className="mb-14 text-center text-[36px] font-semibold tracking-tight text-navy">Ofte stilte spørsmål om pris</h2>
          <PricingFAQ />
        </div>
      </section>

      <section className="bg-navy px-6 py-24">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-[34px] font-semibold tracking-tight text-white">Få en pris tilpasset bedriften</h2>
          <p className="mt-4 text-[16px] leading-7 text-white/60">Fortell hvor mange dere er og hvilke arbeidsområder som er viktigst. Vi viser det relevante og sender en tydelig totalpris.</p>
          <Link href={DEMO_LINK} className="mt-9 inline-flex h-12 items-center rounded-[8px] bg-eblue px-7 text-[15px] font-semibold text-white transition-colors hover:bg-blue-500">Book en kort gjennomgang</Link>
        </div>
      </section>
    </>
  )
}
