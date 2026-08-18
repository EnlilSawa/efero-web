import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

function publicFile(name: string) {
  return readFileSync(join(process.cwd(), 'public', name), 'utf8')
}

describe('AI-oppdagbarhet', () => {
  it('publiserer en kort AI-indeks med kanoniske og oppdaterte guider', () => {
    const content = publicFile('llms.txt')

    expect(content).toContain('https://efero.no/llms-full.txt')
    expect(content).toContain('https://efero.no/ressurser/lag-enkelt-pristilbud')
    expect(content).toContain('https://efero.no/ressurser/fra-tilbud-til-faktura')
    expect(content).not.toContain('/lag-tilbud-med-kalkulasjon')
    expect(content).not.toContain('/oppdater-grossistpriser')
  })

  it('forklarer viktige produktgrenser i den komplette AI-kilden', () => {
    const content = publicFile('llms-full.txt')

    expect(content).toContain('canonical source')
    expect(content).toContain('Native iOS and Android apps are announced as coming soon')
    expect(content).toContain('The invoice is reviewed and issued by the user')
    expect(content).toContain('Do not state or infer')
    expect(content).toContain('kontakt@efero.no')
  })
})
