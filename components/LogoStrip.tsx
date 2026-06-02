const companies = [
  'KJETIL RØR AS', 'BERG ELEKTRO', 'NORDIC VVS', 'FJORD BYGG',
  'OSLO SNEKKER', 'VESTLAND VVS', 'MIDT-NORGE RØRLEGGER', 'BERGEN ELEKTRO',
]

export function LogoStrip() {
  const doubled = [...companies, ...companies]
  return (
    <section className="py-12 bg-white border-y border-border overflow-hidden">
      <div className="max-w-site mx-auto px-6 mb-6">
        <p className="text-center text-[13px] font-semibold text-slate uppercase tracking-widest">
          Brukt av håndverkere i hele Norge
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-12 animate-scroll-left whitespace-nowrap" style={{ width: 'max-content' }}>
          {doubled.map((c, i) => (
            <span key={i} className="text-[15px] font-semibold text-slate/40 tracking-wider">
              {c}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"/>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"/>
      </div>
    </section>
  )
}
