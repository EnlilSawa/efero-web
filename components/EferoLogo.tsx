// Forhåndsbeskårne/skalerte logo-bilder (generert fra logo-dark.png med liten transparent margin + Lanczos-nedskalering,
// for å unngå "spøkelses"-kanter ved 16x CSS-nedskalering av kildebildet)
const ICON_SRC = { w: 285, h: 254 }
const TEXT_SRC = { w: 745, h: 235 }
const GAP_SRC = 67

export default function EferoLogo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  const height = 64
  const scale = height / 1024

  return (
    <div role="img" aria-label="Efero logo" style={{ display: 'flex', alignItems: 'center', height }}>
      {/* E-ikon — alltid Electric Blue, uavhengig av variant */}
      <img
        src="/images/logo-icon.png"
        alt=""
        style={{ width: ICON_SRC.w * scale, height: ICON_SRC.h * scale, flexShrink: 0 }}
      />

      <div style={{ width: GAP_SRC * scale, flexShrink: 0 }} />

      {/* "Efero"-tekst — navy på lys bakgrunn, hvit på mørk bakgrunn */}
      <img
        src="/images/logo-text.png"
        alt=""
        style={{
          width: TEXT_SRC.w * scale, height: TEXT_SRC.h * scale, flexShrink: 0,
          filter: variant === 'white' ? 'brightness(0) invert(1)' : 'none',
        }}
      />
    </div>
  )
}
