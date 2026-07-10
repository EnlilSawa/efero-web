'use server'

import { supabase } from '@/lib/supabase'

export interface PublicQuoteLine {
  description: string
  quantity: number
  unitPrice: number
  amount: number
}

export interface PublicQuote {
  id: string
  quoteNumber: string | null
  title: string
  description: string | null
  customerName: string
  lines: PublicQuoteLine[]
  subtotalExVat: number
  vat: number
  totalAmount: number
  status: 'pending' | 'accepted' | 'declined' | 'expired'
  validUntil: string
  acceptedByName: string | null
  acceptedAt: string | null
  declinedReason: string | null
  companyName: string
  companyLogoUrl: string | null
}

// Henter tilbudet hvis token stemmer (SECURITY DEFINER-RPC, ingen innlogging).
// Returnerer null ved ugyldig lenke/token.
export async function getPublicQuote(id: string, token: string): Promise<PublicQuote | null> {
  if (!id || !token) return null
  const { data, error } = await supabase.rpc('get_public_quote', {
    p_quote_id: id,
    p_token: token,
  })
  if (error || !data) return null
  return data as PublicQuote
}

type RespondResult =
  | { ok: true; status: 'accepted' | 'declined' }
  | { ok: false; error: string; status?: string }

// Kunden godtar/avslår. Kun mens status='pending' og ikke utløpt.
export async function respondToQuote(
  id: string,
  token: string,
  action: 'accept' | 'decline',
  name?: string,
  reason?: string,
): Promise<RespondResult> {
  const { data, error } = await supabase.rpc('respond_to_quote', {
    p_quote_id: id,
    p_token: token,
    p_action: action,
    p_name: name ?? null,
    p_reason: reason ?? null,
  })
  if (error || !data) return { ok: false, error: 'network' }
  return data as RespondResult
}
