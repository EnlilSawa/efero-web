export default function EferoLogo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  const textColor = variant === 'white' ? '#FFFFFF' : '#0A1B33'
  const iconColor = variant === 'white' ? '#FFFFFF' : '#2563FF'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} role="img" aria-label="Efero logo">
      <svg width="28" height="25" viewBox="0 0 40 36" fill="none">
        {/* Øverste: høyre flat, venstre skrå (bred nede, smal oppe) */}
        <polygon points="10,0 40,0 40,9 0,9" fill={iconColor}/>
        {/* Midterste: helt rett */}
        <rect x="0" y="13" width="40" height="9" fill={iconColor}/>
        {/* Nederste: speil av øverste (bred oppe, smal nede) */}
        <polygon points="0,27 40,27 40,36 10,36" fill={iconColor}/>
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
