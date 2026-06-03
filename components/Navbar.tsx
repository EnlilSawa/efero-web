'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import EferoLogo from './EferoLogo'

const centerLinks = [
  { href: '/#funksjoner', label: 'Produkt' },
  { href: '/#funksjoner', label: 'Funksjoner' },
  { href: '/priser',      label: 'Priser' },
  { href: '/om-oss',      label: 'Om oss' },
]

export function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 6)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-border transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-site mx-auto px-8 h-16 flex items-center justify-between gap-8">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0" style={{ background: 'transparent' }}><EferoLogo variant="dark" /></Link>

        {/* Center links */}
        <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {centerLinks.map(l => (
            <Link key={l.label} href={l.href} className="text-[14px] font-medium text-slate hover:text-navy transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          <Link href="/login" className="text-[14px] font-medium text-slate hover:text-navy transition-colors">
            Logg inn
          </Link>
          <Link href="/#kom-i-gang" className="h-10 px-5 rounded-[8px] bg-navy text-white text-[14px] font-semibold flex items-center hover:bg-charcoal transition-colors">
            Kom i gang
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden p-2 -mr-2 flex-shrink-0" onClick={() => setOpen(v => !v)}>
          <div className="w-5 flex flex-col gap-[5px]">
            <span className={`h-[2px] bg-charcoal rounded transition-all ${open ? 'rotate-45 translate-y-[7px]' : ''}`}/>
            <span className={`h-[2px] bg-charcoal rounded transition-all ${open ? 'opacity-0' : ''}`}/>
            <span className={`h-[2px] bg-charcoal rounded transition-all ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-border px-8 py-5 flex flex-col gap-4">
          {centerLinks.map(l => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-[15px] text-charcoal">{l.label}</Link>
          ))}
          <div className="border-t border-border pt-4 flex flex-col gap-3">
            <Link href="/login" onClick={() => setOpen(false)} className="text-[15px] text-slate">Logg inn</Link>
            <Link href="/#kom-i-gang" onClick={() => setOpen(false)} className="h-12 rounded-[8px] bg-navy text-white text-[14px] font-semibold flex items-center justify-center">Kom i gang</Link>
          </div>
        </div>
      )}
    </header>
  )
}
