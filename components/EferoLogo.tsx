export default function EferoLogo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  const textColor = variant === 'white' ? '#FFFFFF' : '#0A1B33'
  const iconColor = variant === 'white' ? '#FFFFFF' : '#2563FF'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} role="img" aria-label="Efero logo">
      <svg width="24" height="20" viewBox="0 0 36 30" fill="none">
        <polygon points="4,0 32,0 28,8 0,8"   fill={iconColor}/>
        <rect    x="0" y="11" width="28" height="8" fill={iconColor}/>
        <polygon points="0,22 28,22 32,30 4,30" fill={iconColor}/>
      </svg>
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        fontSize: '20px',
        color: textColor,
        letterSpacing: '-0.5px',
        lineHeight: 1,
      }}>
        Efero
      </span>
    </div>
  )
}
