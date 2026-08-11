import { describe, expect, it } from 'vitest'
import robots from '@/app/robots'
import sitemap from '@/app/sitemap'

describe('offentlig oppdagbarhet', () => {
  it('publiserer alle offentlige markedssider i sitemap uten private tilbud', () => {
    const entries = sitemap()
    const urls = entries.map(entry => entry.url)

    expect(entries).toHaveLength(12)
    expect(urls).toContain('https://efero.no')
    expect(urls).toContain('https://efero.no/book-demo')
    expect(urls.some(url => url.includes('/tilbud/'))).toBe(false)
    expect(entries.every(entry => entry.lastModified instanceof Date)).toBe(true)
  })

  it('slipper søke- og AI-hentere inn, men beskytter tilbud og API-ruter', () => {
    const config = robots()
    const rules = Array.isArray(config.rules) ? config.rules : [config.rules]
    const aiRule = rules.find(rule => Array.isArray(rule.userAgent))

    expect(config.sitemap).toBe('https://efero.no/sitemap.xml')
    expect(aiRule?.userAgent).toContain('OAI-SearchBot')
    expect(aiRule?.userAgent).toContain('Claude-SearchBot')
    expect(aiRule?.userAgent).toContain('PerplexityBot')
    expect(aiRule?.disallow).toEqual(['/tilbud/', '/api/'])
  })
})
