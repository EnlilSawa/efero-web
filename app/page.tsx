import Link from 'next/link'
import { DashboardMockup } from '@/components/AppMockup'
import { FeaturesSection } from '@/components/FeaturesSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { HomeContactForm } from '@/components/HomeContactForm'
import { AnimatedSection } from '@/components/AnimatedSection'

// ── App badges ────────────────────────────────────────────────────────────────

function AppBadges() {
  return (
    <div className="flex items-center justify-center gap-4 mt-10">

      {/* App Store */}
      <div className="flex flex-col items-center gap-1.5">
        <a href="#" className="flex items-center gap-3 bg-black border border-white/20 text-white rounded-[10px] px-5 py-2.5 w-[148px] hover:bg-white/10 transition-colors">
          <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="white">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <div>
            <div className="text-[9px] text-white/60 leading-none mb-0.5">Download on the</div>
            <div className="text-[14px] font-semibold text-white leading-tight">App Store</div>
          </div>
        </a>
        <span className="text-[11px] text-white/40">Kommer snart</span>
      </div>

      {/* Google Play */}
      <div className="flex flex-col items-center gap-1.5">
        <a href="#" className="flex items-center gap-3 bg-black border border-white/20 text-white rounded-[10px] px-5 py-2.5 w-[148px] hover:bg-white/10 transition-colors">
          <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M3.18 23.76c.3.17.65.19.96.07l11.62-6.72-2.6-2.6-9.98 9.25z" fill="#4FC3F7"/>
            <path d="M3.18.24C2.77.44 2.5.86 2.5 1.33v21.34c0 .47.27.89.68 1.09L14.04 12 3.18.24z" fill="#81C784"/>
            <path d="M19.66 10.54c-.35-.2-.77-.2-1.12 0L17 11.14l2.77 2.77 1.08-.62c.62-.36.62-1.23 0-1.69-.39-.24-.81-.62-1.19-1.06z" fill="#F06292"/>
            <path d="M19.13 14.3L16.6 13.1 5.54.72C5.2.36 4.67.28 4.23.5L15.1 11.37l4.03 3.19-.1.24z" fill="#FFB74D"/>
          </svg>
          <div>
            <div className="text-[9px] text-white/60 leading-none mb-0.5">GET IT ON</div>
            <div className="text-[14px] font-semibold text-white leading-tight">Google Play</div>
          </div>
        </a>
        <span className="text-[11px] text-white/40">Kommer snart</span>
      </div>

    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── HERO — navy med bakgrunnsmønster ──────────────────── */}
      <section className="bg-navy border-b border-white/10 relative overflow-hidden">

        {/* Dashboard som bakgrunn */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <div style={{ opacity: 0.12, transform: 'scale(1.25) translateY(10%)', filter: 'blur(1px)', width: '100%', maxWidth: 1100 }}>
            <DashboardMockup />
          </div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,27,51,0.88)' }}/>

        <div className="relative z-10 max-w-[700px] mx-auto px-6 py-24 text-center flex flex-col items-center">

          <div className="inline-flex items-center bg-eblue text-white text-[12px] font-semibold px-4 py-1.5 rounded-full mb-8">
            Bygget for norske håndverkere
          </div>

          <h1 className="text-[56px] font-semibold text-white leading-[1.12] tracking-tight mb-7">
            Framtidens verktøy for din håndverkerbedrift
          </h1>

          <p className="text-[20px] text-white/70 leading-relaxed max-w-[560px] mb-10">
            Efero samler jobber, team og fakturering i én enkel app.
            Fra kundetelefon til betalt faktura — uten papir og Excel.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="#kom-i-gang"
              className="h-[52px] px-8 rounded-[10px] bg-eblue text-white text-[15px] font-semibold flex items-center hover:bg-blue-500 transition-colors"
            >
              Start gratis — 30 dager
            </Link>
            <Link
              href="#les-mer"
              className="h-[52px] px-8 rounded-[10px] border-2 border-white/30 text-white text-[15px] font-semibold flex items-center hover:border-white transition-colors"
            >
              Se hvordan det fungerer
            </Link>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-7 text-[14px] text-white/60">
            {['30 dager gratis prøveperiode', 'Personlig onboarding inkludert', 'Norsk support på hverdager'].map(t => (
              <li key={t} className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-eblue flex-shrink-0" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t}
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ── SCREENSHOT — lys grå ───────────────────────────────── */}
      <section id="les-mer" className="bg-lgray border-b border-border py-16 px-6">
        <div className="max-w-site mx-auto">
          <AnimatedSection>
            <p className="text-[12px] font-semibold text-slate uppercase tracking-[0.1em] text-center mb-8">
              Se Efero i praksis
            </p>
            <div className="rounded-[16px] border border-border overflow-hidden max-w-[1100px] mx-auto">
              <DashboardMockup />
            </div>
          </AnimatedSection>
        </div>
      </section>

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
                Rørleggere og elektrikere er eksperter på sitt håndverk — ikke på regnskapsark og
                fakturaprogram fra 2005.
              </p>
              <p>
                Vi laget Efero for å gi norske håndverkere et verktøy som faktisk fungerer i hverdagen.
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

      {/* ── FUNKSJONER — tabs ──────────────────────────────────── */}
      <FeaturesSection />

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

      {/* ── TESTIMONIALS — hvit ────────────────────────────────── */}
      <TestimonialsSection />

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
              'Norsk support på hverdager',
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
                href="#"
                className="h-[52px] px-8 rounded-[10px] bg-eblue text-white text-[15px] font-semibold flex items-center hover:bg-blue-500 transition-colors"
              >
                Start gratis prøveperiode
              </Link>
              <Link
                href="#"
                className="h-[52px] px-8 rounded-[10px] border-2 border-white/30 text-white text-[15px] font-semibold flex items-center hover:border-white transition-colors"
              >
                Last ned appen
              </Link>
            </div>
            <AppBadges />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
