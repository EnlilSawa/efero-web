'use client'
import { useState } from 'react'
import { DashboardMockup, InvoiceMockup, TechnicianMockup, StatisticsMockup } from './AppMockup'

type Tab = {
  icon: string
  label: string
  badge: string
  title: string
  text: string
  features: string[]
  Mockup: () => JSX.Element
}

const tabs: Tab[] = [
  {
    icon: '📋',
    label: 'Jobbtavle',
    badge: 'Jobbstyring',
    title: 'Full oversikt over\nalle jobber',
    text: 'Se alle jobber i sanntid. Ny, pågår og ferdig — alltid oppdatert.',
    features: [
      'Opprett jobb på 20 sekunder',
      'Tildel tekniker med ett klikk',
      'Se status i sanntid',
      'Klikk på jobb for full detalj',
    ],
    Mockup: DashboardMockup,
  },
  {
    icon: '📄',
    label: 'Faktura',
    badge: 'Fakturering',
    title: 'Faktura som\nsender seg selv',
    text: 'Når teknikeren trykker ferdig genereres fakturaen automatisk med norsk MVA.',
    features: [
      'Automatisk generert',
      'Norsk MVA inkludert',
      'Sendes på e-post',
      'Full betalingsoversikt',
    ],
    Mockup: InvoiceMockup,
  },
  {
    icon: '👥',
    label: 'Team',
    badge: 'Team',
    title: 'Teknikerne dine\nalltid oppdatert',
    text: 'Teknikerne ser dagens jobber på mobilen. Ingen WhatsApp, ingen misforståelser.',
    features: [
      'Mobilapp for teknikere',
      'Jobber tildelt automatisk',
      'Én knapp når ferdig',
      'Inntekt per tekniker',
    ],
    Mockup: TechnicianMockup,
  },
  {
    icon: '📊',
    label: 'Statistikk',
    badge: 'Oversikt',
    title: 'Alt du trenger å\nvite om bedriften',
    text: 'Total inntekt, aktive jobber og fakturastatus — alt på én skjerm.',
    features: [
      'Månedlig inntektsoversikt',
      'Inntekt per tekniker',
      'Fakturastatus oversikt',
      'Jobboversikt i tall',
    ],
    Mockup: StatisticsMockup,
  },
]

export function InteractiveDemo() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  const handleTab = (i: number) => {
    if (i === active) return
    setFading(true)
    setTimeout(() => {
      setActive(i)
      setFading(false)
    }, 150)
  }

  const { Mockup, badge, title, text, features } = tabs[active]

  return (
    <section id="les-mer" className="bg-lgray border-b border-border py-24 px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[12px] font-semibold text-slate uppercase tracking-[0.1em] mb-4">
            SE EFERO I PRAKSIS
          </p>
          <h2 className="text-[36px] font-semibold text-navy tracking-tight leading-[1.2]">
            Slik ser det ut når du<br />bruker Efero hver dag
          </h2>
        </div>

        {/* Tab navigation */}
        <div className="overflow-x-auto mb-12">
          <div className="flex justify-center gap-2 min-w-max mx-auto px-4">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => handleTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-[8px] text-[14px] font-medium whitespace-nowrap transition-colors ${
                  active === i
                    ? 'bg-eblue text-white'
                    : 'bg-white text-slate border border-[#E2E8F0] hover:border-eblue/40'
                }`}
              >
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 items-center"
          style={{ opacity: fading ? 0 : 1, transition: 'opacity 0.2s ease' }}
        >
          {/* Screenshot — top on mobile, right on desktop */}
          <div className="order-1 md:order-2 bg-[#F5F7FA] rounded-[14px] border border-border p-4">
            <Mockup />
          </div>

          {/* Text — bottom on mobile, left on desktop */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center bg-eblue/10 text-eblue text-[12px] font-semibold px-3 py-1.5 rounded-full mb-5">
              {badge}
            </div>
            <h3
              className="text-[28px] font-semibold text-navy leading-[1.25] tracking-tight mb-4"
              style={{ whiteSpace: 'pre-line' }}
            >
              {title}
            </h3>
            <p className="text-[15px] text-slate leading-[1.75] mb-7">
              {text}
            </p>
            <ul className="flex flex-col gap-3">
              {features.map(f => (
                <li key={f} className="flex items-center gap-2.5 text-[14px] text-charcoal font-medium">
                  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feature strip */}
        <p className="text-center text-[13px] text-slate mt-14">
          Jobbtavle&nbsp;&middot;&nbsp;Faktura&nbsp;&middot;&nbsp;Team&nbsp;&middot;&nbsp;Statistikk&nbsp;&middot;&nbsp;Arkiv&nbsp;&middot;&nbsp;Kunderegister
        </p>

      </div>
    </section>
  )
}
