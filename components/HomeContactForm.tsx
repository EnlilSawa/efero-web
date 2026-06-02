'use client'
import { useState } from 'react'

const teamOptions = [
  'Kun meg selv',
  '2-3 teknikere',
  '4-8 teknikere',
  '9+ teknikere',
]

const startOptions = [
  'Så snart som mulig',
  'Innen 1 måned',
  'Bare utforsker',
]

export function HomeContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', team: '', start: '', message: '' })
  const [state, setState] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setState(res.ok ? 'ok' : 'error')
    } catch {
      setState('error')
    }
  }

  const inputCls = 'w-full h-12 border border-border rounded-[8px] px-4 text-[15px] text-charcoal bg-white placeholder:text-slate/40 focus:outline-none focus:border-eblue transition-colors'

  return (
    <section id="kontakt" className="bg-lgray border-b border-border py-24 px-6">
      <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 items-start">

        {/* Left — 40% */}
        <div className="md:col-span-2">
          <p className="text-[13px] font-semibold text-eblue uppercase tracking-widest mb-4">Kontakt</p>
          <h2 className="text-[36px] font-semibold text-navy tracking-tight mb-5">
            Ta kontakt med oss
          </h2>
          <p className="text-[16px] text-slate leading-[1.8] mb-8">
            Svar innen én arbeidsdag på hverdager. Vi hjelper deg i gang med Efero.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            <span className="text-[15px] text-charcoal">✉️ hei@efero.app</span>
            <span className="text-[15px] text-charcoal">🕐 Svar innen 24 timer</span>
          </div>

          <div className="bg-white border border-border rounded-[12px] p-5">
            <p className="text-[13px] font-semibold text-navy mb-3">Det inkluderer:</p>
            <ul className="flex flex-col gap-2">
              {[
                'Gratis 30-dagers prøveperiode',
                'Oppsett og onboarding-hjelp',
                'Norsk support',
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-slate">
                  <svg className="w-4 h-4 text-eblue flex-shrink-0" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — 60% */}
        <div className="md:col-span-3 bg-white rounded-[14px] border border-border p-9">
          {state === 'ok' ? (
            <div className="py-10 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-[18px] font-semibold text-navy mb-2">Melding sendt!</p>
              <p className="text-[14px] text-slate">Vi svarer deg innen én arbeidsdag.</p>
            </div>
          ) : (
            <>
              <p className="text-[18px] font-semibold text-navy mb-1">La oss finne riktig løsning</p>
              <p className="text-[13px] text-slate mb-7">Tar under 1 minutt.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-slate">Navn *</label>
                  <input className={inputCls} value={form.name} onChange={set('name')} placeholder="Kjetil Hansen" required />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-slate">E-post *</label>
                  <input type="email" className={inputCls} value={form.email} onChange={set('email')} placeholder="kjetil@vvs.no" required />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-slate">Bedriftsnavn</label>
                  <input className={inputCls} value={form.company} onChange={set('company')} placeholder="VVS Service AS" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-slate">Antall teknikere</label>
                  <select className={`${inputCls} cursor-pointer`} value={form.team} onChange={set('team')}>
                    <option value="">Velg antall</option>
                    {teamOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-slate">Når ønsker du å starte?</label>
                  <select className={`${inputCls} cursor-pointer`} value={form.start} onChange={set('start')}>
                    <option value="">Velg tidspunkt</option>
                    {startOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-slate">Melding</label>
                  <textarea
                    className="w-full border border-border rounded-[8px] px-4 py-3 text-[15px] text-charcoal bg-white placeholder:text-slate/40 focus:outline-none focus:border-eblue transition-colors resize-none"
                    rows={4}
                    value={form.message}
                    onChange={set('message')}
                    placeholder="Hva lurer du på?"
                  />
                </div>

                {state === 'error' && (
                  <p className="text-[13px] text-red-500">Noe gikk galt. Prøv igjen eller e-post oss direkte.</p>
                )}

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="h-[52px] w-full rounded-[10px] bg-eblue text-white text-[15px] font-semibold hover:bg-blue-500 transition-colors disabled:opacity-60 mt-2"
                >
                  {state === 'loading' ? 'Sender…' : 'Send melding'}
                </button>

                <p className="text-[13px] text-slate text-center flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Svar innen 1 time på hverdager
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
