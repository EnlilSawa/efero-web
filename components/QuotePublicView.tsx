'use client'

import { useState, type CSSProperties, type ReactNode } from 'react'
import { respondToQuote, type PublicQuote } from '@/app/actions/quote'

const NAVY = '#0A1B33'
const EBLUE = '#2563FF'
const SLATE = '#64748B'
const BORDER = '#E2E8F0'
const GREEN = '#15803D'
const RED = '#DC2626'
const CHARCOAL = '#1F2937'

function kr(n: number): string {
  return new Intl.NumberFormat('nb-NO', { minimumFractionDigits: 0 }).format(Number(n || 0)) + ' kr'
}
function dato(d: string | null): string {
  if (!d) return ''
  return new Date(d).toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function QuotePublicView({ quote, id, token }: { quote: PublicQuote | null; id: string; token: string }) {
  const [status, setStatus] = useState(quote?.status ?? 'pending')
  const [mode, setMode] = useState<'view' | 'declining'>('view')
  const [name, setName] = useState(quote?.customerName ?? '')
  const [reason, setReason] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Ugyldig/utløpt lenke
  if (!quote) {
    return (
      <Shell>
        <div style={{ textAlign: 'center', padding: '48px 24px' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🔒</div>
          <h1 style={{ fontSize: 22, color: NAVY, margin: '0 0 8px', fontWeight: 700 }}>Lenken er ugyldig</h1>
          <p style={{ color: SLATE, fontSize: 15, lineHeight: 1.6 }}>
            Denne tilbudslenken finnes ikke eller er ikke lenger gyldig. Ta kontakt med bedriften som sendte
            deg tilbudet.
          </p>
        </div>
      </Shell>
    )
  }

  const isExpired = status === 'expired' || (status === 'pending' && new Date(quote.validUntil) < new Date(new Date().toDateString()))
  const canRespond = status === 'pending' && !isExpired

  const submit = async (action: 'accept' | 'decline') => {
    setBusy(true)
    setError(null)
    const res = await respondToQuote(id, token, action, name, reason)
    setBusy(false)
    if (res.ok) {
      setStatus(res.status)
      setMode('view')
    } else if (res.error === 'already' && res.status) {
      setStatus(res.status as typeof status)
    } else if (res.error === 'expired') {
      setStatus('expired')
    } else {
      setError('Noe gikk galt. Prøv igjen om litt.')
    }
  }

  return (
    <Shell companyName={quote.companyName} logoUrl={quote.companyLogoUrl}>
      <div style={{ padding: '28px 24px' }}>
        <p style={{ fontSize: 16, color: CHARCOAL, margin: '0 0 4px' }}>Hei {quote.customerName},</p>
        <p style={{ fontSize: 15, color: SLATE, margin: '0 0 20px', lineHeight: 1.6 }}>
          {quote.companyName} har sendt deg et tilbud på <strong style={{ color: NAVY }}>{quote.title}</strong>.
        </p>

        {/* Totalsum */}
        <div style={{ background: '#EEF4FF', borderRadius: 12, padding: 20, textAlign: 'center', margin: '0 0 20px' }}>
          <div style={{ fontSize: 13, color: SLATE, marginBottom: 4 }}>Totalt inkl. MVA</div>
          <div style={{ fontSize: 32, fontWeight: 700, color: EBLUE }}>{kr(quote.totalAmount)}</div>
        </div>

        {/* Spesifikasjon */}
        <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
          {quote.lines?.map((l, i) => (
            <div
              key={i}
              style={{
                display: 'flex', justifyContent: 'space-between', gap: 12, padding: '12px 16px',
                borderBottom: `1px solid ${BORDER}`,
              }}
            >
              <div>
                <div style={{ fontSize: 14, color: NAVY, fontWeight: 500 }}>{l.description}</div>
                <div style={{ fontSize: 12, color: SLATE, marginTop: 2 }}>{l.quantity} × {kr(l.unitPrice)}</div>
              </div>
              <div style={{ fontSize: 14, color: NAVY, fontWeight: 600, whiteSpace: 'nowrap' }}>{kr(l.amount)}</div>
            </div>
          ))}
          <div style={{ padding: '12px 16px', background: '#F8FAFC' }}>
            <Row label="Sum eks. MVA" value={kr(quote.subtotalExVat)} />
            <Row label="MVA 25%" value={kr(quote.vat)} />
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 8, marginTop: 4, borderTop: `1px solid ${BORDER}` }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>Totalt inkl. MVA</span>
              <span style={{ fontSize: 16, fontWeight: 700, color: EBLUE }}>{kr(quote.totalAmount)}</span>
            </div>
          </div>
        </div>

        {quote.description ? (
          <p style={{ fontSize: 14, color: SLATE, lineHeight: 1.6, marginBottom: 16 }}>{quote.description}</p>
        ) : null}
        <p style={{ fontSize: 13, color: SLATE, marginBottom: 20 }}>
          {quote.quoteNumber ? `Tilbudsnummer ${quote.quoteNumber} · ` : ''}Gyldig til {dato(quote.validUntil)}
        </p>

        {/* Handlingsområde */}
        {status === 'accepted' && (
          <Banner color={GREEN} bg="#F0FDF4" icon="✓"
            title="Tilbudet er godtatt"
            text={`Takk! ${quote.companyName} er varslet og tar kontakt.`} />
        )}
        {status === 'declined' && (
          <Banner color={RED} bg="#FEF2F2" icon="✕"
            title="Tilbudet er avslått"
            text="Takk for tilbakemeldingen. Du kan ta kontakt med bedriften hvis du ombestemmer deg." />
        )}
        {isExpired && (
          <Banner color={SLATE} bg="#F8FAFC" icon="⏳"
            title="Tilbudet er utløpt"
            text={`Dette tilbudet gjaldt til ${dato(quote.validUntil)}. Ta kontakt med ${quote.companyName} for et nytt tilbud.`} />
        )}

        {canRespond && mode === 'view' && (
          <>
            <label style={{ display: 'block', fontSize: 13, color: SLATE, marginBottom: 6 }}>Ditt navn</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Fullt navn"
              style={inputStyle}
            />
            {error && <p style={{ color: RED, fontSize: 13, marginBottom: 10 }}>{error}</p>}
            <button onClick={() => submit('accept')} disabled={busy || !name.trim()} style={{ ...btnSolid, opacity: busy || !name.trim() ? 0.6 : 1 }}>
              {busy ? 'Sender …' : 'Godta tilbudet'}
            </button>
            <button onClick={() => setMode('declining')} disabled={busy} style={btnGhost}>
              Avslå tilbudet
            </button>
          </>
        )}

        {canRespond && mode === 'declining' && (
          <>
            <label style={{ display: 'block', fontSize: 13, color: SLATE, marginBottom: 6 }}>Årsak (valgfritt)</label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Hvorfor avslår du tilbudet?"
              rows={3}
              style={{ ...inputStyle, height: 'auto', resize: 'vertical' as const }}
            />
            {error && <p style={{ color: RED, fontSize: 13, marginBottom: 10 }}>{error}</p>}
            <button onClick={() => submit('decline')} disabled={busy} style={{ ...btnSolid, background: RED, opacity: busy ? 0.6 : 1 }}>
              {busy ? 'Sender …' : 'Bekreft avslag'}
            </button>
            <button onClick={() => { setMode('view'); setError(null) }} disabled={busy} style={btnGhost}>
              Tilbake
            </button>
          </>
        )}
      </div>
    </Shell>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: SLATE, padding: '3px 0' }}>
      <span>{label}</span><span>{value}</span>
    </div>
  )
}

function Banner({ color, bg, icon, title, text }: { color: string; bg: string; icon: string; title: string; text: string }) {
  return (
    <div style={{ background: bg, borderRadius: 12, padding: 20, textAlign: 'center' }}>
      <div style={{ fontSize: 28, marginBottom: 6 }}>{icon}</div>
      <div style={{ fontSize: 17, fontWeight: 700, color, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 14, color: SLATE, lineHeight: 1.6 }}>{text}</div>
    </div>
  )
}

function Shell({ children, companyName, logoUrl }: { children: ReactNode; companyName?: string; logoUrl?: string | null }) {
  return (
    <main style={{ minHeight: '100vh', background: '#F5F7FA', padding: '24px 16px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div style={{ width: '100%', maxWidth: 600, background: '#FFFFFF', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(10,27,51,0.06)' }}>
        <div style={{ background: '#FFFFFF', padding: '28px 24px', textAlign: 'center', borderBottom: `1px solid ${BORDER}` }}>
          {logoUrl ? (
            // Firmalogoen er laget for lys bakgrunn (vises på hvite fakturaer) →
            // hvit header så den ikke forsvinner.
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoUrl} alt={companyName ?? ''} style={{ maxHeight: 48, maxWidth: 220, objectFit: 'contain' }} />
          ) : (
            <h1 style={{ color: NAVY, fontSize: 22, margin: 0, fontWeight: 700 }}>{companyName ?? 'Tilbud'}</h1>
          )}
        </div>
        {children}
        <div style={{ background: '#F8FAFC', padding: '18px 24px', textAlign: 'center', fontSize: 12, color: '#94A3B8', borderTop: `1px solid ${BORDER}` }}>
          Sendt via Efero
        </div>
      </div>
    </main>
  )
}

const inputStyle: CSSProperties = {
  width: '100%', boxSizing: 'border-box', border: `1px solid ${BORDER}`, borderRadius: 10,
  padding: '13px 14px', fontSize: 15, marginBottom: 12, color: CHARCOAL, outline: 'none',
}
const btnSolid: CSSProperties = {
  display: 'block', width: '100%', background: GREEN, color: '#FFFFFF', border: 'none',
  borderRadius: 10, padding: '15px', fontSize: 16, fontWeight: 600, cursor: 'pointer', marginBottom: 10,
}
const btnGhost: CSSProperties = {
  display: 'block', width: '100%', background: 'transparent', color: SLATE, border: 'none',
  padding: '10px', fontSize: 14, fontWeight: 500, cursor: 'pointer',
}
