import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let client: SupabaseClient | null = null

/**
 * Lazy client so `next build` / OpenNext can collect page data without live secrets.
 * Provide real NEXT_PUBLIC_SUPABASE_* at build time (CI secrets) for production.
 */
export function getSupabase(): SupabaseClient {
  if (client) return client
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
  client = createClient(url, key, {
    global: {
      fetch: (input, options = {}) => fetch(input, { ...options, cache: 'no-store' }),
    },
  })
  return client
}

/** @deprecated Prefer getSupabase() — kept for existing imports. */
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop, receiver) {
    return Reflect.get(getSupabase(), prop, receiver)
  },
})
