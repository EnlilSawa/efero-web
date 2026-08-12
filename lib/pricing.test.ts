import { describe, expect, it } from 'vitest'
import {
  CORE_PACKAGE_FEATURES,
  EXTRA_FIELD_USER_PRICE_MINOR,
  OPTIONAL_MODULES,
  PRICING_PLANS,
  PRICING_TERMS,
} from '@/lib/pricing'

describe('offentlig prismodell', () => {
  it('har avtalte pakker og jevnere vekstgrenser', () => {
    expect(PRICING_PLANS.map(plan => [plan.priceMinor, plan.teamLabel])).toEqual([
      [69_000, 'Inntil 3 feltbrukere'],
      [149_000, 'Inntil 8 feltbrukere'],
      [249_000, 'Inntil 15 feltbrukere'],
    ])
    expect(EXTRA_FIELD_USER_PRICE_MINOR).toBe(11_900)
  })

  it('forklarer grunnpakke, tilvalg og kommersielle vilkår', () => {
    expect(CORE_PACKAGE_FEATURES).toHaveLength(6)
    expect(OPTIONAL_MODULES).toHaveLength(5)
    expect(PRICING_TERMS).toEqual({
      trial: '30 dager gratis uten betalingskort',
      setup: 'Personlig oppstart uten etableringsgebyr',
      cancellation: 'Månedsabonnement uten bindingstid',
      support: 'E-postsupport med svar innen én virkedag',
    })
  })
})
