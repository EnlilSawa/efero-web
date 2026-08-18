import { describe, expect, it } from 'vitest'
import { resourceArticles, resourceBySlug } from '@/lib/resources'

describe('offentlige produktguider', () => {
  it('beskriver dagens manuelle tilbudsflyt', () => {
    const article = resourceBySlug('lag-enkelt-pristilbud')
    const content = JSON.stringify(article)

    expect(article?.title).toBe('Lag et enkelt pristilbud')
    expect(content).toContain('manuelle linjer')
    expect(content).toContain('sanntidsvisning')
    expect(content).not.toMatch(/grossistpriser|materialbibliotek|velg kalkulasjon/i)
  })

  it('har ærlige endringsdatoer og ingen utgåtte URL-er', () => {
    expect(resourceArticles.every(article => !Number.isNaN(Date.parse(article.updatedAt)))).toBe(true)
    expect(resourceBySlug('lag-tilbud-med-kalkulasjon')).toBeUndefined()
    expect(resourceBySlug('oppdater-grossistpriser')).toBeUndefined()
  })
})
