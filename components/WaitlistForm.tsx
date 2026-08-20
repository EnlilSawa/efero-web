'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { WAITLIST_TEAM_OPTIONS, WAITLIST_TRADE_OPTIONS } from '@/lib/waitlist-request'

type FormState = {
  name: string
  email: string
  phone: string
  company: string
  trade: string
  teamSize: string
  consent: boolean
  website: string
}

const initialForm: FormState = {
  name: '', email: '', phone: '', company: '', trade: '', teamSize: '', consent: false, website: '',
}

export function WaitlistForm() {
  const [form, setForm] = useState(initialForm)
  const [state, setState] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const update = (key: keyof FormState, value: string | boolean) => {
    setForm(current => ({ ...current, [key]: value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      })
      if (response.ok) {
        setState('ok')
        return
      }
      const result = await response.json().catch(() => null) as { error?: string } | null
      setErrorMessage(result?.error || 'Noe gikk galt. Prøv igjen om litt.')
      setState('error')
    } catch {
      setErrorMessage('Kunne ikke kontakte serveren. Prøv igjen eller send oss en e-post.')
      setState('error')
    }
  }

  if (state === 'ok') {
    return (
      <div role="status" className="rounded-[18px] border border-[#b9c9c1] bg-white p-7 shadow-[0_24px_70px_rgba(0,40,31,0.10)] md:p-9">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#dcebe4] text-forest" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 4 4L19 6" /></svg>
        </div>
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#52675f]">Du er på listen</p>
        <h2 className="mt-3 text-[30px] font-medium leading-tight tracking-[-0.025em] text-ink">Takk, {form.name.split(' ')[0]}.</h2>
        <p className="mt-4 text-[16px] leading-[1.6] text-[#2f4a41]">
          Vi tar kontakt på <strong className="font-medium text-ink">{form.email}</strong> når vi åpner for nye bedrifter. Du får også mulighet til å påvirke hva vi bygger først.
        </p>
        <Link href="/funksjoner" className="mt-7 inline-flex text-[14px] font-medium text-forest underline underline-offset-4">Se hva Efero skal samle →</Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[18px] border border-[#b9c9c1] bg-white p-6 shadow-[0_24px_70px_rgba(0,40,31,0.10)] md:p-8">
      <div className="mb-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#52675f]">Reserver plass</p>
        <h2 className="mt-2 text-[26px] font-medium tracking-[-0.02em] text-ink">Bli med på ventelisten</h2>
        <p className="mt-2 text-[14px] leading-[1.55] text-[#52675f]">Tar under ett minutt. Helt uforpliktende.</p>
      </div>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <Label htmlFor="waitlist-website">Nettside</Label>
        <Input id="waitlist-website" value={form.website} onChange={event => update('website', event.target.value)} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Navn" id="waitlist-name" required>
          <Input id="waitlist-name" value={form.name} onChange={event => update('name', event.target.value)} autoComplete="name" placeholder="Ola Nordmann" required />
        </Field>
        <Field label="Jobb-e-post" id="waitlist-email" required>
          <Input id="waitlist-email" type="email" value={form.email} onChange={event => update('email', event.target.value)} autoComplete="email" placeholder="ola@bedrift.no" required />
        </Field>
        <Field label="Bedrift" id="waitlist-company" required>
          <Input id="waitlist-company" value={form.company} onChange={event => update('company', event.target.value)} autoComplete="organization" placeholder="Nordmann Elektro AS" required />
        </Field>
        <Field label="Telefon" hint="valgfritt" id="waitlist-phone">
          <Input id="waitlist-phone" type="tel" value={form.phone} onChange={event => update('phone', event.target.value)} autoComplete="tel" placeholder="+47 900 00 000" />
        </Field>
        <Field label="Fagområde" id="waitlist-trade" required>
          <div className="relative">
            <Select id="waitlist-trade" value={form.trade} onChange={event => update('trade', event.target.value)} required>
              <option value="" disabled>Velg fagområde</option>
              {WAITLIST_TRADE_OPTIONS.map(option => <option key={option}>{option}</option>)}
            </Select>
            <Chevron />
          </div>
        </Field>
        <Field label="Størrelse" id="waitlist-team-size" required>
          <div className="relative">
            <Select id="waitlist-team-size" value={form.teamSize} onChange={event => update('teamSize', event.target.value)} required>
              <option value="" disabled>Velg antall ansatte</option>
              {WAITLIST_TEAM_OPTIONS.map(option => <option key={option}>{option}</option>)}
            </Select>
            <Chevron />
          </div>
        </Field>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 text-[13px] leading-[1.5] text-[#52675f]">
        <input type="checkbox" checked={form.consent} onChange={event => update('consent', event.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#9bb0a6] accent-[#004c3a]" required />
        <span>Jeg godtar at Efero lagrer opplysningene og kontakter meg om produktet. Se vår{' '}
          <Link href="/personvern" className="text-forest underline underline-offset-2">personvernerklæring</Link>.
        </span>
      </label>

      {state === 'error' && <p role="alert" className="mt-4 text-[13px] text-red-700">{errorMessage}</p>}
      <Button type="submit" disabled={state === 'loading'} className="mt-6 h-[54px] w-full text-[16px]">
        {state === 'loading' ? 'Registrerer…' : 'Reserver min plass'}
      </Button>
      <p className="mt-3 text-center text-[12px] text-[#687c74]">Ingen spam. Ingen binding. Meld deg av når som helst.</p>
    </form>
  )
}

function Field({ label, hint, id, required, children }: { label: string; hint?: string; id: string; required?: boolean; children: React.ReactNode }) {
  return <div className="space-y-2"><Label htmlFor={id}>{label} {required && <span className="text-forest" aria-hidden="true">*</span>}{hint && <span className="ml-1 font-normal text-[#73877f]">({hint})</span>}</Label>{children}</div>
}

function Chevron() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.7" className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#52675f]"><path d="m6 8 4 4 4-4" /></svg>
}
