import Link from 'next/link'
import EferoLogo from './EferoLogo'

// ── App badges ────────────────────────────────────────────────────────────────

function AppBadges() {
  return (
    <div className="flex items-center gap-4">

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

const cols = [
  {
    label: 'PRODUKT',
    links: [
      { label: 'Funksjoner', href: '/#funksjoner' },
      { label: 'Priser',     href: '/priser' },
      { label: 'Last ned appen', href: '#' },
    ],
  },
  {
    label: 'SELSKAP',
    links: [
      { label: 'Om oss',     href: '/om-oss' },
      { label: 'Kontakt',    href: '#kontakt' },
      { label: 'Personvern', href: '/personvern' },
      { label: 'Vilkår',              href: '/vilkar' },
      { label: 'Databehandleravtale', href: '/databehandleravtale' },
    ],
  },
  {
    label: 'KONTAKT',
    links: [
      { label: 'kontakt@efero.no',    href: 'mailto:kontakt@efero.no' },
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
            <a href="mailto:kontakt@efero.no" className="mt-3 block text-[13px] text-white/55 hover:text-white/80 transition-colors">
              kontakt@efero.no
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

        {/* App badges */}
        <div className="flex justify-center pt-10">
          <AppBadges />
        </div>

        {/* Bottom */}
        <p className="pt-8 text-center text-[13px] text-white/35">
          © 2026 Efero. Alle rettigheter forbeholdt.
        </p>
      </div>
    </footer>
  )
}
