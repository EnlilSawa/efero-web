// Bounding-bokser (px) for E-ikon og "Efero"-tekst i /images/logo-dark.png (1536×1024)
const IMG_W = 1536
const IMG_H = 1024
const ICON = { x: 256, y: 359, w: 277, h: 246 }
const TEXT = { x: 608, y: 373, w: 737, h: 227 }
const GAP = TEXT.x - (ICON.x + ICON.w)

export default function EferoLogo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  const height = 64
  const scale = height / IMG_H
  const imgW = IMG_W * scale
  const imgH = IMG_H * scale

  return (
    <div role="img" aria-label="Efero logo" style={{ display: 'flex', alignItems: 'center', height }}>
      {/* E-ikon — alltid Electric Blue, uavhengig av variant */}
      <div style={{ width: ICON.w * scale, height: ICON.h * scale, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <img
          src="/images/logo-dark.png"
          alt=""
          style={{ position: 'absolute', width: imgW, height: imgH, maxWidth: 'none', left: -ICON.x * scale, top: -ICON.y * scale }}
        />
      </div>

      <div style={{ width: GAP * scale, flexShrink: 0 }} />

      {/* "Efero"-tekst — navy på lys bakgrunn, hvit på mørk bakgrunn */}
      <div style={{ width: TEXT.w * scale, height: TEXT.h * scale, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
        <img
          src="/images/logo-dark.png"
          alt=""
          style={{
            position: 'absolute', width: imgW, height: imgH, maxWidth: 'none',
            left: -TEXT.x * scale, top: -TEXT.y * scale,
            filter: variant === 'white' ? 'brightness(0) invert(1)' : 'none',
          }}
        />
      </div>
    </div>
  )
}
