import { describe, expect, it } from 'vitest'
import { pageMeta } from './seo'

describe('pageMeta', () => {
  it('gir hver underside riktig canonical, delingstittel og eget delingsbilde', () => {
    const metadata = pageMeta({
      title: 'Book en demo',
      description: 'Velg modulene som passer bedriften.',
      path: '/book-demo',
    })

    expect(metadata.alternates.canonical).toBe('https://efero.no/book-demo')
    expect(metadata.openGraph.title).toBe('Book en demo | Efero')
    expect(metadata.openGraph.url).toBe('https://efero.no/book-demo')
    expect(metadata.openGraph.images[0].url).toContain('/api/og?')
    expect(metadata.openGraph.images[0].url).toContain('title=Book+en+demo')
    expect(metadata.twitter.images).toEqual([metadata.openGraph.images[0].url])
  })

  it('fjerner Efero-prefikset fra overskriften i forsidens delingsbilde', () => {
    const metadata = pageMeta({
      title: 'Efero — Ett enkelt system for hele arbeidsdagen',
      description: 'Efero for norske håndverksbedrifter.',
      path: '/',
    })

    expect(metadata.openGraph.title).toBe('Efero — Ett enkelt system for hele arbeidsdagen')
    expect(metadata.openGraph.images[0].url).toContain(
      'title=Ett+enkelt+system+for+hele+arbeidsdagen',
    )
  })
})
