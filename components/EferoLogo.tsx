export default function EferoLogo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  const textColor = variant === 'white' ? '#FFFFFF' : '#0A1B33'
  const iconColor = variant === 'white' ? '#FFFFFF' : '#2563FF'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} role="img" aria-label="Efero logo">
      <svg width="32" height="28" viewBox="0 0 40 34" fill="none">
        <polygon points="6,0 38,0 32,9 0,9"   fill={iconColor}/>
        <rect    x="0" y="13" width="32" height="9" fill={iconColor}/>
        <polygon points="0,25 32,25 38,34 6,34" fill={iconColor}/>
      </svg>
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 800,
        fontSize: '22px',
        color: textColor,
        letterSpacing: '-0.8px',
        lineHeight: 1,
      }}>
        Efero
      </span>
    </div>
  )
}
