import { AnimatedSection } from './AnimatedSection'

const stats = [
  { value: '20 sek', label: 'Tid for å opprette en jobb' },
  { value: '0 kr',   label: 'Ekstra for å sende faktura' },
  { value: '30 dager', label: 'Gratis prøveperiode' },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-site mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.value} delay={i * 120} className="text-center">
              <div className="text-[52px] md:text-[60px] font-bold text-white leading-none mb-3">{s.value}</div>
              <div className="text-[16px] text-white/50 font-medium">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
