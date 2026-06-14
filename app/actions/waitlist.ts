'use server'

import { supabase } from '@/lib/supabase'
import { sendWaitlistConfirmation } from '@/lib/email'

const BASE_COUNT = 47

export async function getWaitlistCount(): Promise<number> {
  const { data, error } = await supabase.rpc('get_waitlist_count')
  if (error) return BASE_COUNT
  return data as number
}

type JoinResult =
  | { status: 'added'; count: number }
  | { status: 'exists'; count: number }
  | { status: 'error'; message: string }

export async function joinWaitlist(email: string): Promise<JoinResult> {
  const trimmed = email.trim().toLowerCase()
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)

  if (!valid) {
    return { status: 'error', message: 'Skriv inn en gyldig e-postadresse' }
  }

  const { data, error } = await supabase.rpc('add_to_waitlist', { p_email: trimmed })

  if (error) {
    return { status: 'error', message: 'Noe gikk galt. Prøv igjen.' }
  }

  const result = data as JoinResult

  // Send bekreftelses-e-post kun for nye påmeldinger. Feiler sendingen skal
  // påmeldingen likevel stå — vi logger og svelger feilen (blokkerer aldri).
  if (result.status === 'added') {
    try {
      await sendWaitlistConfirmation(trimmed)
    } catch (e) {
      console.error('Waitlist-bekreftelse feilet for', trimmed, e)
    }
  }

  return result
}
