'use client'
import { useState, useTransition, type FormEvent } from 'react'
import Link from 'next/link'
import EferoLogo from './EferoLogo'
import { joinWaitlist } from '@/app/actions/waitlist'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const features = ['📋 Jobbstyring', '🧾 Automatisk faktura', '👥 Team-oversikt']

export function ComingSoon({ initialCount }: { initialCount: number }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState<'idle' | 'added' | 'exists'>('idle')
  const [count, setCount] = useState(initialCount)
  const [pop, setPop] = useState(false)
  const [pending, startTransition] = useTransition()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!EMAIL_RE.test(email.trim())) {
      setError('Skriv inn en gyldig e-postadresse')
      return
    }
    setError('')

    startTransition(async () => {
      const result = await joinWaitlist(email)

      if (result.status === 'error') {
        setError(result.message)
        return
      }

      setCount(result.count)
      setStatus(result.status)
      if (result.status === 'added') {
        setPop(true)
        setTimeout(() => setPop(false), 400)
      }
    })
  }

  return (
    <div className="min-h-screen bg-[#0A1B33] flex flex-col items-center px-6 animate-fade-in-slow">
      <div className="w-full max-w-[580px] flex flex-col items-center text-center">

        {/* Logo */}
        <div className="mt-[60px]">
          <EferoLogo variant="white" />
        </div>

        {/* Badge */}
        <div className="mt-12 inline-flex items-center bg-eblue text-white text-[13px] font-semibold rounded-[20px] px-4 py-1.5">
          Kommer snart
        </div>

        {/* Heading */}
        <h1
          className="mt-7 text-[48px] font-semibold text-white leading-[1.15] tracking-tight"
          style={{ whiteSpace: 'pre-line' }}
        >
          {'Appen som gir deg\nkontroll over bedriften.'}
        </h1>

        {/* Subtitle */}
        <p
          className="mt-5 text-[18px] text-white/70 leading-relaxed"
          style={{ whiteSpace: 'pre-line' }}
        >
          {'Efero er jobbstyring, fakturering og teamoversikt i én enkel app.\nBygget for norske håndverkere.'}
        </p>

        {/* Venteliste-teller */}
        <p className="mt-10 text-[28px] font-bold text-white/80">
          <span className={`text-eblue ${pop ? 'counter-pop' : ''}`}>{count}</span> håndverkere er allerede på ventelisten
        </p>

        {/* Skjema / suksess */}
        <div className="mt-8 w-full">
          {status === 'idle' ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="text"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="din@epost.no"
                className={`flex-1 w-full bg-white/10 border rounded-[10px] text-white placeholder-white/40 px-[18px] py-[14px] focus:outline-none focus:border-eblue/60 transition-colors ${
                  error ? 'border-[#DC2626]' : 'border-white/20'
                }`}
              />
              <button
                type="submit"
                disabled={pending}
                className="w-full sm:w-auto flex-shrink-0 bg-eblue hover:bg-blue-500 transition-colors text-white font-semibold rounded-[10px] px-6 py-[14px] disabled:opacity-60"
              >
                Få tidlig tilgang
              </button>
            </form>
          ) : (
            <div className="animate-fade-in">
              <p className="text-[16px] font-semibold" style={{ color: '#1A9E5C' }}>
                {status === 'added' ? '✓ Du er på listen!' : '✓ Du er allerede på listen!'}
              </p>
              <p className="mt-1 text-[14px]" style={{ color: '#1A9E5C' }}>
                Vi varsler deg når Efero er klar.
              </p>
            </div>
          )}

          {error && (
            <p className="mt-2 text-[14px] text-left" style={{ color: '#DC2626' }}>
              {error}
            </p>
          )}
        </div>

        {/* Funksjons-hint */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-white/50 text-[13px]">
          {features.map((f, i) => (
            <span key={f} className="flex items-center gap-3">
              {i > 0 && <span className="opacity-60">·</span>}
              {f}
            </span>
          ))}
        </div>

      </div>

      {/* Bunntekst */}
      <p className="mt-auto pb-10 text-white/30 text-[12px]">
        © 2026 Efero <Link href="/admin-access" className="hover:text-white/50 transition-colors">·</Link> kontakt@efero.no
      </p>
    </div>
  )
}
