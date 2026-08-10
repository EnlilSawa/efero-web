import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Efero — Ett enkelt system for hele arbeidsdagen'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const INK = '#00281f'
const FOREST = '#004c3a'
const MUTED = '#3d5c52'
const PAPER = '#f5f7f5'
const MIST = '#d3ded8'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: PAPER,
          backgroundImage:
            'radial-gradient(circle at 88% 4%, rgba(0,76,58,0.14), rgba(245,247,245,0) 62%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: FOREST,
          }}
        />

        {/* Logo: E-ikon (tre skrå streker) + ordmerke */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, transform: 'skewX(-12deg)' }}>
            <div style={{ width: 52, height: 12, background: FOREST, borderRadius: 3 }} />
            <div style={{ width: 42, height: 12, background: FOREST, borderRadius: 3 }} />
            <div style={{ width: 52, height: 12, background: FOREST, borderRadius: 3 }} />
          </div>
          <span style={{ color: INK, fontSize: 52, fontWeight: 600, letterSpacing: '-1.5px', lineHeight: 1 }}>
            Efero
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              color: MUTED,
              fontSize: 22,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: 26,
            }}
          >
            Ordre- og timesystem for håndverksbedrifter
          </span>
          <span
            style={{
              color: INK,
              fontSize: 74,
              fontWeight: 600,
              letterSpacing: '-2.5px',
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Ett enkelt system for hele arbeidsdagen
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: `2px solid ${MIST}`,
            paddingTop: 26,
          }}
        >
          <span style={{ color: MUTED, fontSize: 26 }}>
            Tilbud · Jobber · Timer · Materialer · Sjekklister · Faktura
          </span>
          <span style={{ color: FOREST, fontSize: 26, fontWeight: 600 }}>efero.no</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
