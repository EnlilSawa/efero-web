import { AnimatedSection } from './AnimatedSection'

const features = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      </svg>
    ),
    title: 'Jobbstyring',
    text: 'Opprett og tildel jobber på sekunder. Full oversikt over hele arbeidsdagen.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Team-oversikt',
    text: 'Se hvem som jobber med hva i sanntid. Ingen flere WhatsApp-meldinger.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
      </svg>
    ),
    title: 'Automatisk faktura',
    text: 'Faktura sendes automatisk når jobben er ferdig. Kunden betaler innen forfall.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M9 12h6M9 16h6M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"/>
      </svg>
    ),
    title: 'Digitale tilbud',
    text: 'Send tilbud på e-post. Kunden godkjenner digitalt — jobben opprettes automatisk.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M21 8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16V8z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Jobbarkiv',
    text: 'Alle fullførte jobber lagres med bilder og notater. Alltid tilgjengelig.',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    title: 'Kunderegister',
    text: 'Full historikk per kunde. Vet alltid hva som er gjort tidligere.',
  },
]

export function ProblemSection() {
  return (
    <section id="produkt" className="py-20 bg-white">
      <div className="max-w-site mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-[36px] md:text-[42px] font-bold text-navy text-center mb-4 tracking-tight">
            Alt du trenger — i én app
          </h2>
          <p className="text-[18px] text-slate text-center max-w-xl mx-auto mb-14 leading-relaxed">
            Efero er bygget for håndverkere som vil bruke tid på jobben, ikke på kontorarbeid.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 80}>
              <div className="group bg-white rounded-[14px] border border-border p-7 h-full hover:border-eblue transition-colors cursor-default">
                <div className="w-10 h-10 rounded-[10px] bg-eblue text-white flex items-center justify-center mb-5">
                  {f.icon}
                </div>
                <h3 className="text-[17px] font-semibold text-navy mb-2">{f.title}</h3>
                <p className="text-[14px] text-slate leading-relaxed">{f.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
