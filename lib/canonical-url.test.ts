import { describe, expect, it } from 'vitest'
import { canonicalRedirectUrl } from '@/lib/canonical-url'

describe('kanonisk produksjonsadresse', () => {
  it('sender HTTP til HTTPS og beholder sti og søk', () => {
    expect(canonicalRedirectUrl({ url: 'http://efero.no/ressurser?fra=meny' }))
      .toBe('https://efero.no/ressurser?fra=meny')
  })

  it('sender www til apex-domenet', () => {
    expect(canonicalRedirectUrl({ url: 'https://www.efero.no/priser' }))
      .toBe('https://efero.no/priser')
  })

  it('respekterer proxy-headere', () => {
    expect(canonicalRedirectUrl({
      url: 'https://efero.no/kontakt',
      forwardedProto: 'http',
      forwardedHost: 'efero.no',
    })).toBe('https://efero.no/kontakt')
  })

  it('lar kanonisk HTTPS og lokale adresser være urørt', () => {
    expect(canonicalRedirectUrl({ url: 'https://efero.no/' })).toBeNull()
    expect(canonicalRedirectUrl({ url: 'http://127.0.0.1:3000/' })).toBeNull()
  })
})
