import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'
import { DEMO_LINK } from '@/lib/links'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Om Efero — Norsk SaaS for håndverkere',
  description: 'Efero er laget for norske håndverkere som vil bruke tid på jobben, ikke på administrasjon. Les historien bak Efero.',
  alternates: { canonical: 'https://efero.app/om-oss' },
  openGraph: {
    title: 'Om Efero — Norsk SaaS for håndverkere',
    description: 'Efero er laget for norske håndverkere som vil bruke tid på jobben, ikke på administrasjon. Les historien bak Efero.',
    url: 'https://efero.app/om-oss',
  },
}

const values = [
  {
    icon: '⚡',
    title: 'Enkelthet',
    text: 'Hvis en rørlegger i arbeidshansker ikke kan bruke det, er det for komplisert. Vi prioriterer enkelhet over alt annet.',
  },
  {
    icon: '🤝',
    title: 'Ærlighet',
    text: 'Ingen skjulte kostnader. Ingen lange kontrakter. Du vet alltid hva du betaler og kan si opp når du vil.',
  },
  {
    icon: '🇳🇴',
    title: 'Norsk',
    text: 'Bygget for norske regler og norsk MVA. Vi forstår hvordan norske håndverkere driver bedrift.',
  },
]

export default function OmOss() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-lgray">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-eblue/10 text-eblue rounded-full px-4 py-1.5 text-[13px] font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-eblue inline-block"/>
                Om oss
              </div>
              <h1 className="text-[44px] md:text-[52px] font-bold text-navy leading-[1.1] mb-6 tracking-tight">
                Bygget for folk som jobber med hendene
              </h1>
              <p className="text-[19px] text-slate leading-relaxed">
                Vi er et norsk team som har sett håndverkere slite med administrasjon for lenge.
                Efero er løsningen vi alltid ønsket fantes.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vår historie */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <h2 className="text-[30px] font-bold text-navy mb-8 tracking-tight">Vår historie</h2>
            </AnimatedSection>

            <div className="flex flex-col gap-6 text-[17px] text-slate leading-relaxed">
              <AnimatedSection delay={100}>
                <p>
                  Det startet med en enkel observasjon: norske håndverkere er eksperter på faget sitt,
                  men bruker altfor mye tid på papirarbeid. Fakturaer i Excel, jobboversikt på
                  WhatsApp, og kunder som venter i ukevis på å betale.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p>
                  Vi bygget Efero fordi vi mente det måtte finnes en bedre måte. En app som er
                  enkel nok til å brukes på byggeplass, men kraftig nok til å erstatte Excel,
                  Tripletex og WhatsApp på én gang.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <p>
                  I dag bruker hundrevis av håndverkere Efero til å styre jobber, fakturere kunder
                  og holde team i sync — uten papir og uten stress. Vi er stolte av hver enkelt
                  rørlegger, elektriker og snekker som stoler på oss.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Verdier */}
      <section className="py-20 bg-lgray">
        <div className="max-w-site mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-[36px] font-bold text-navy text-center mb-12 tracking-tight">Våre verdier</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-border p-8 h-full">
                  <div className="text-4xl mb-5">{v.icon}</div>
                  <h3 className="text-[20px] font-bold text-navy mb-3">{v.title}</h3>
                  <p className="text-[15px] text-slate leading-relaxed">{v.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="max-w-site mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-[36px] md:text-[44px] font-bold text-white mb-5 tracking-tight">
              Bli med oss
            </h2>
            <p className="text-[17px] text-white/50 mb-8 max-w-sm mx-auto">
              Prøv Efero gratis i 30 dager. Personlig onboarding inkludert.
            </p>
            <Link
              href={DEMO_LINK}
              className="inline-flex h-[52px] px-8 rounded-btn bg-eblue text-white text-[15px] font-semibold items-center hover:bg-blue-500 transition-colors"
            >
              Book en demo
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
