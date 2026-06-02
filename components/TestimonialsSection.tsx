const testimonials = [
  {
    initials: 'MK',
    name: 'Magnus Karlsen',
    role: 'Rørlegger, Oslo',
    quote: 'Jeg brukte 2 timer hver fredag på fakturaer. Med Efero tar det 5 minutter. Skulle ønske jeg fant dette for 3 år siden.',
    featured: false,
  },
  {
    initials: 'KH',
    name: 'Kjetil Hansen',
    role: 'Elektriker, Bergen',
    quote: 'Endelig kan jeg se hva karene mine jobber med uten å ringe dem hele dagen. Jobbtavlen er gull verdt.',
    featured: true,
  },
  {
    initials: 'EB',
    name: 'Erik Berg',
    role: 'Snekker, Stavanger',
    quote: 'Kundene betaler mye raskere når de får faktura på e-post med en gang jobben er ferdig.',
    featured: false,
  },
]

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {Array(5).fill(0).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1.5l1.65 3.35L13.5 5.5l-2.75 2.68.65 3.82L8 10.25l-3.4 1.75.65-3.82L2.5 5.5l3.85-.65L8 1.5z"/>
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="bg-white border-b border-border py-24 px-6">
      <div className="max-w-site mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-[36px] font-semibold text-navy tracking-tight mb-4">
            Hva håndverkere sier om Efero
          </h2>
          <p className="text-[18px] text-slate">
            Norske håndverkere som har byttet til Efero
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div
              key={t.name}
              className={`rounded-[16px] p-7 flex flex-col ${
                t.featured ? 'border-2 border-eblue' : 'border border-border'
              }`}
            >
              <Stars />
              <p className="text-[16px] text-charcoal leading-relaxed flex-1 mb-7">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-navy">{t.name}</p>
                  <p className="text-[12px] text-slate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
