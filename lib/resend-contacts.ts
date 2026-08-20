import type { WaitlistRequest } from '@/lib/waitlist-request'

// Segment-ID er ikke en hemmelighet. Standardverdien gjør at deployen virker
// med Eferos Resend-konto uten en ekstra produksjonsvariabel.
export const EFERO_WAITLIST_SEGMENT_ID = 'a210d618-7703-423c-829e-2762ee2003c8'

type ResendContactOptions = {
  apiKey: string
  segmentId?: string
  baseUrl?: string
}

function contactPayload(data: WaitlistRequest) {
  const [firstName, ...lastNameParts] = data.name.trim().split(/\s+/)
  return {
    email: data.email,
    first_name: firstName,
    last_name: lastNameParts.join(' '),
    unsubscribed: false,
    properties: {
      company_name: data.company,
      phone: data.phone,
      trade: data.trade,
      team_size: data.teamSize,
    },
  }
}

async function resendRequest(
  url: string,
  apiKey: string,
  method: 'POST' | 'PATCH',
  body?: Record<string, unknown>,
) {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
    signal: AbortSignal.timeout(10_000),
  })
}

/**
 * Oppretter en global Resend Contact og legger den i Efero-segmentet.
 * Eksisterende e-postadresser oppdateres og legges tilbake i segmentet.
 */
export async function syncWaitlistContact(data: WaitlistRequest, options: ResendContactOptions) {
  const baseUrl = (options.baseUrl || 'https://api.resend.com').replace(/\/+$/, '')
  const segmentId = options.segmentId || EFERO_WAITLIST_SEGMENT_ID
  const payload = contactPayload(data)

  const createResponse = await resendRequest(`${baseUrl}/contacts`, options.apiKey, 'POST', {
    ...payload,
    segments: [{ id: segmentId }],
  })

  if (createResponse.ok) return true

  // Resend svarer 409 når kontakten finnes fra før. Oppdater kontaktfeltene og
  // sørg for medlemskap i segmentet i stedet for å miste registreringen.
  if (createResponse.status !== 409) {
    console.error('Resend contact creation failed', createResponse.status)
    return false
  }

  const contactKey = encodeURIComponent(data.email)
  const updateResponse = await resendRequest(
    `${baseUrl}/contacts/${contactKey}`,
    options.apiKey,
    'PATCH',
    payload,
  )
  if (!updateResponse.ok) {
    console.error('Resend contact update failed', updateResponse.status)
    return false
  }

  const segmentResponse = await resendRequest(
    `${baseUrl}/contacts/${contactKey}/segments/${encodeURIComponent(segmentId)}`,
    options.apiKey,
    'POST',
  )
  if (!segmentResponse.ok && segmentResponse.status !== 409) {
    console.error('Adding Resend contact to segment failed', segmentResponse.status)
    return false
  }

  return true
}
