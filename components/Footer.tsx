import Link from 'next/link'
import EferoLogo from './EferoLogo'

const cols = [
  {
    label: 'PRODUKT',
    links: [
      { label: 'Funksjoner', href: '/#funksjoner' },
      { label: 'Priser',     href: '/priser' },
      { label: 'Last ned appen', href: '#' },
      { label: 'Logg inn',  href: '/login' },
    ],
  },
  {
    label: 'SELSKAP',
    links: [
      { label: 'Om oss',     href: '/om-oss' },
      { label: 'Kontakt',    href: '#kontakt' },
      { label: 'Personvern', href: '#' },
      { label: 'Vilkår',     href: '#' },
    ],
  },
  {
    label: 'KONTAKT',
    links: [
      { label: 'hei@efero.app',    href: 'mailto:hei@efero.app' },
      { label: 'Norge',            href: '#' },
      { label: 'Man-fre 09-17',    href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-site mx-auto px-8 pt-16 pb-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* Brand col */}
          <div>
            <EferoLogo variant="white" />
            <p className="mt-4 text-[14px] text-white/55 leading-relaxed max-w-[200px]">
              Den enkleste måten å drive håndverkerbedrift.
            </p>
            <a href="mailto:hei@efero.app" className="mt-3 block text-[13px] text-white/55 hover:text-white/80 transition-colors">
              hei@efero.app
            </a>
          </div>

          {/* Link cols */}
          {cols.map(col => (
            <div key={col.label}>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/35 mb-5">{col.label}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[14px] text-white/60 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <p className="pt-8 text-center text-[13px] text-white/35">
          © 2026 Efero. Alle rettigheter forbeholdt.
        </p>
      </div>
    </footer>
  )
}
