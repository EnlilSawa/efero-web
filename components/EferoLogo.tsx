export default function EferoLogo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  const textColor = variant === 'white' ? '#FFFFFF' : '#0A1B33'
  const iconColor = variant === 'white' ? '#FFFFFF' : '#2563FF'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} role="img" aria-label="Efero logo">
      <svg width="24" height="22" viewBox="0 0 34 29" fill="none">
        {/* Øverste: høyre flat, venstre skrå (bred nede, smal oppe) */}
        <polygon points="8,0 34,0 34,7 0,7" fill={iconColor}/>
        {/* Midterste: helt rett */}
        <rect x="0" y="11" width="34" height="7" fill={iconColor}/>
        {/* Nederste: speil av øverste (bred oppe, smal nede) */}
        <polygon points="0,22 34,22 34,29 8,29" fill={iconColor}/>
      </svg>
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 800,
        fontSize: '22px',
        color: textColor,
        letterSpacing: '-0.5px',
        lineHeight: 1,
      }}>
        Efero
      </span>
    </div>
  )
}
