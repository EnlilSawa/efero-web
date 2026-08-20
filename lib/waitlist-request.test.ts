import { describe, expect, it } from 'vitest'
import { buildWaitlistEmail, validateWaitlistRequest, WAITLIST_TEAM_OPTIONS, WAITLIST_TRADE_OPTIONS } from './waitlist-request'

const validPayload = {
  name: 'Kari Nordmann', email: 'KARI@example.no', phone: '+47 900 00 000', company: 'Nordmann Elektro AS',
  trade: WAITLIST_TRADE_OPTIONS[0], teamSize: WAITLIST_TEAM_OPTIONS[1], consent: true, website: '',
}

describe('waitlist request', () => {
  it('normaliserer og godtar gyldige kontaktopplysninger', () => {
    const result = validateWaitlistRequest(validPayload)
    expect(result.ok).toBe(true)
    if (result.ok) expect(result.data.email).toBe('kari@example.no')
  })

  it('avviser ugyldige segmenter og telefonnummer', () => {
    const result = validateWaitlistRequest({ ...validPayload, trade: 'Spam', phone: 'abc', teamSize: '' })
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.errors).toMatchObject({ trade: expect.any(String), phone: expect.any(String), teamSize: expect.any(String) })
  })

  it('escaper kontaktdata i e-postens HTML', () => {
    const result = validateWaitlistRequest({ ...validPayload, name: '<Kari>', company: 'Nordmann & Co' })
    expect(result.ok).toBe(true)
    if (!result.ok) return
    const email = buildWaitlistEmail(result.data)
    expect(email.html).toContain('&lt;Kari&gt;')
    expect(email.html).toContain('Nordmann &amp; Co')
    expect(email.html).not.toContain('<Kari>')
  })
})
