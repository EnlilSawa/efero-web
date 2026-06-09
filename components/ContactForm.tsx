'use client'
import { useState } from 'react'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [state, setState] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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

  const inputCls = 'w-full h-12 border border-border rounded-[8px] px-4 text-[15px] text-charcoal bg-white placeholder:text-slate/50 focus:outline-none focus:border-eblue transition-colors'

  return (
    <section className="bg-lgray border-b border-border py-24 px-6">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div>
          <h2 className="text-[32px] font-semibold text-navy tracking-tight mb-5">
            Har du spørsmål?
          </h2>
          <p className="text-[16px] text-slate leading-[1.7] mb-8">
            Vi svarer innen én arbeidsdag.
            Eller send oss en e-post direkte på{' '}
            <a href="mailto:kontakt@efero.no" className="text-navy underline underline-offset-2">kontakt@efero.no</a>
          </p>
          <div className="flex flex-col gap-3 text-[15px] text-slate">
            <span>📍 Norge</span>
            <span>✉️ kontakt@efero.no</span>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-white rounded-[14px] border border-border p-8">
          {state === 'ok' ? (
            <div className="py-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-[17px] font-semibold text-navy mb-2">Melding sendt!</p>
              <p className="text-[14px] text-slate">Vi svarer deg innen én arbeidsdag.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-slate">Navn *</label>
                  <input className={inputCls} value={form.name} onChange={set('name')} placeholder="Kjetil Hansen" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-slate">E-post *</label>
                  <input className={inputCls} type="email" value={form.email} onChange={set('email')} placeholder="kjetil@vvs.no" required />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium text-slate">Bedriftsnavn</label>
                <input className={inputCls} value={form.company} onChange={set('company')} placeholder="VVS Service AS" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium text-slate">Melding *</label>
                <textarea
                  className="w-full border border-border rounded-[8px] px-4 py-3 text-[15px] text-charcoal bg-white placeholder:text-slate/50 focus:outline-none focus:border-eblue transition-colors resize-none"
                  rows={4}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Hva lurer du på?"
                  required
                />
              </div>

              {state === 'error' && (
                <p className="text-[13px] text-red-500">Noe gikk galt. Prøv igjen eller e-post oss direkte.</p>
              )}

              <button
                type="submit"
                disabled={state === 'loading'}
                className="h-[52px] w-full rounded-[8px] bg-eblue text-white text-[15px] font-semibold hover:bg-blue-500 transition-colors disabled:opacity-60"
              >
                {state === 'loading' ? 'Sender…' : 'Send melding'}
              </button>

              <p className="text-[13px] text-slate text-center">Vi svarer innen 24 timer</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
