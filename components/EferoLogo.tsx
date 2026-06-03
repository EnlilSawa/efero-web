type Props = {
  variant?: 'dark' | 'white'
}

export default function EferoLogo({ variant = 'dark' }: Props) {
  const textColor = variant === 'white' ? '#FFFFFF' : '#0A1B33'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} role="img" aria-label="Efero logo">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <polygon points="2,4 26,4 24,11 0,11" fill="#2563FF"/>
        <rect x="0" y="13" width="26" height="7" fill="#2563FF"/>
        <polygon points="0,22 24,22 26,29 2,29" fill="#2563FF"/>
      </svg>
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        fontSize: '22px',
        color: textColor,
        letterSpacing: '-0.3px',
      }}>
        Efero
      </span>
    </div>
  )
}
