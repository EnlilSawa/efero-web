'use client'
import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'
import { DashboardMockup, TechnicianMockup, InvoiceMockup, QuoteMockup } from './AppMockup'

const features = [
  {
    id: 'jobs',
    label: 'Jobbstyring',
    heading: 'Alle jobber på ett sted',
    text: 'Opprett en jobb på 20 sekunder, del til riktig tekniker. Følg status i sanntid fra kontoret eller telefonen.',
    mockup: <DashboardMockup />,
  },
  {
    id: 'tech',
    label: 'Tekniker-app',
    heading: 'Ansatte ser jobbene på telefonen',
    text: 'Teknikerne ser dagens jobber, adresse og detaljer i appen. Én knapp når jobben er ferdig — fakturaen genereres automatisk.',
    mockup: <TechnicianMockup />,
  },
  {
    id: 'invoice',
    label: 'Automatisk faktura',
    heading: 'Faktura på sekunder',
    text: 'Faktura genereres automatisk når jobben er ferdig og sendes til kunden på e-post. Du slipper å tenke på det.',
    mockup: <InvoiceMockup />,
  },
  {
    id: 'quote',
    label: 'Tilbud',
    heading: 'Send profesjonelle tilbud',
    text: 'Send tilbud på e-post. Kunden godkjenner digitalt — jobben opprettes automatisk i Efero.',
    mockup: <QuoteMockup />,
  },
]

export function SolutionSection() {
  const [active, setActive] = useState('jobs')
  const current = features.find(f => f.id === active)!

  return (
    <section id="funksjoner" className="py-20 bg-white">
      <div className="max-w-site mx-auto px-6">
        <AnimatedSection>
          <p className="text-[13px] font-semibold text-eblue uppercase tracking-widest text-center mb-3">Løsningen</p>
          <h2 className="text-[36px] md:text-[40px] font-bold text-navy text-center mb-12 tracking-tight">
            Efero løser det — på 15 minutter
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Tabs */}
          <div className="flex flex-col gap-3">
            {features.map(f => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`text-left p-5 rounded-2xl border-2 transition-all ${
                  active === f.id
                    ? 'border-eblue bg-eblue/5'
                    : 'border-border bg-white hover:border-slate/30'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${active === f.id ? 'bg-eblue' : 'bg-border'}`}/>
                  <span className={`text-[15px] font-bold ${active === f.id ? 'text-navy' : 'text-charcoal'}`}>{f.label}</span>
                </div>
                {active === f.id && (
                  <div className="pl-5">
                    <p className="text-[14px] text-slate leading-relaxed">{f.text}</p>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Mockup */}
          <div className="lg:sticky lg:top-24">
            {current.mockup}
          </div>
        </div>
      </div>
    </section>
  )
}
