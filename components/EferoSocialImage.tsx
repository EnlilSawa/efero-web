const INK = '#00281f'
const FOREST = '#004c3a'
const MUTED = '#3d5c52'
const PAPER = '#f5f7f5'
const MIST = '#d3ded8'

type EferoSocialImageProps = {
  title: string
  description?: string
}

export function EferoSocialImage({ title, description }: EferoSocialImageProps) {
  return (
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

      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1010 }}>
        <span
          style={{
            color: MUTED,
            fontSize: 22,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: 26,
          }}
        >
          For norske håndverksbedrifter
        </span>
        <span
          style={{
            color: INK,
            fontSize: title.length > 42 ? 64 : 76,
            fontWeight: 600,
            letterSpacing: '-2.5px',
            lineHeight: 1.02,
          }}
        >
          {title}
        </span>
        {description ? (
          <span
            style={{
              color: MUTED,
              fontSize: 27,
              lineHeight: 1.28,
              marginTop: 22,
              maxWidth: 980,
            }}
          >
            {description}
          </span>
        ) : null}
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
  )
}
