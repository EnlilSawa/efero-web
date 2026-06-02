'use client'
import { useState } from 'react'
import { DashboardMockup, InvoiceMockup, TechnicianMockup } from './AppMockup'

const tabs = [
  {
    label: 'Jobbstyring',
    heading: 'Full kontroll over alle jobber',
    features: [
      'Opprett jobb på 20 sekunder',
      'Tildel til riktig tekniker',
      'Følg status i sanntid',
      'Jobbarkiv med bilder og notater',
      'Kundehistorikk alltid tilgjengelig',
    ],
    mockup: <DashboardMockup />,
    imageRight: true,
  },
  {
    label: 'Fakturering',
    heading: 'Faktura som sender seg selv',
    features: [
      'Automatisk generert ved ferdig jobb',
      'MVA beregnet automatisk',
      'Sendes på e-post til kunden',
      'Kunden kan akseptere tilbudet digitalt',
      'Full oversikt over alle fakturaer',
    ],
    mockup: <InvoiceMockup />,
    imageRight: false,
  },
  {
    label: 'Team',
    heading: 'Teknikerne dine på ett sted',
    features: [
      'Teknikerne ser jobber på mobil',
      'Én knapp når jobb er ferdig',
      'Oversikt over hvem gjør hva',
      'Inntekt per tekniker i statistikk',
    ],
    mockup: <TechnicianMockup />,
    imageRight: true,
  },
]

export function FeaturesSection() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <section id="funksjoner" className="bg-lgray border-b border-border py-24 px-6">
      <div className="max-w-site mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[36px] font-semibold text-navy tracking-tight mb-4">
            Alt du trenger i én app
          </h2>
          <p className="text-[18px] text-slate max-w-md mx-auto leading-relaxed">
            Ingen ekstra verktøy. Ingen integrasjoner. Bare Efero.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex border-b border-border">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`px-7 py-3 text-[15px] font-medium transition-colors relative ${
                  active === i ? 'text-eblue' : 'text-slate hover:text-charcoal'
                }`}
              >
                {t.label}
                {active === i && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-eblue rounded-t"/>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className={tab.imageRight ? 'md:order-1' : 'md:order-2'}>
            <h3 className="text-[28px] font-semibold text-navy tracking-tight mb-7">
              {tab.heading}
            </h3>
            <ul className="flex flex-col gap-4">
              {tab.features.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-eblue font-bold text-[16px] mt-px flex-shrink-0">→</span>
                  <span className="text-[15px] text-charcoal font-medium leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup */}
          <div className={`${tab.imageRight ? 'md:order-2' : 'md:order-1'} bg-white rounded-[14px] border border-border p-4`}>
            {tab.mockup}
          </div>
        </div>
      </div>
    </section>
  )
}
