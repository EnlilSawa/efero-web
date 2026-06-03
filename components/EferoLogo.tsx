export default function EferoLogo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  const textColor = variant === 'white' ? '#FFFFFF' : '#0A1B33'
  const iconColor = variant === 'white' ? '#FFFFFF' : '#2563FF'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }} role="img" aria-label="Efero logo">
      <svg width="42" height="36" viewBox="0 0 42 36" fill="none">
        <polygon points="0,0 36,0 42,9 6,9"   fill={iconColor}/>
        <rect    x="0" y="13" width="42" height="10" fill={iconColor}/>
        <polygon points="6,27 42,27 36,36 0,36" fill={iconColor}/>
      </svg>
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 800,
        fontSize: '26px',
        color: textColor,
        letterSpacing: '-1px',
        lineHeight: 1,
      }}>
        Efero
      </span>
    </div>
  )
}
