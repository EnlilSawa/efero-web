import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Efero — Jobbstyring og fakturering for norske håndverkere'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A1B33',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Electric Blue stripe top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: '#2563FF',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 36 }}>
          {/* E icon — 3 skewed bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, transform: 'skewX(-12deg)' }}>
            <div style={{ width: 80, height: 18, background: '#2563FF', borderRadius: 4 }} />
            <div style={{ width: 64, height: 18, background: '#2563FF', borderRadius: 4 }} />
            <div style={{ width: 80, height: 18, background: '#2563FF', borderRadius: 4 }} />
          </div>
          <span style={{ color: '#FFFFFF', fontSize: 88, fontWeight: 600, letterSpacing: '-2px', lineHeight: 1 }}>
            Efero
          </span>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.70)', fontSize: 34, textAlign: 'center', maxWidth: 720, lineHeight: 1.4, margin: 0 }}>
          Jobbstyring og fakturering for norske håndverkere
        </p>
      </div>
    ),
    { ...size },
  )
}
