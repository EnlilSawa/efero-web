'use server'

import { supabase } from '@/lib/supabase'

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

  return data as JoinResult
}
