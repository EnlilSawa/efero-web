export function EferoLogo({ light = false }: { light?: boolean }) {
  const iconColor = '#2563FF'
  const textColor = light ? '#FFFFFF' : '#0A1B33'
  return (
    <div className="flex items-center select-none" style={{ gap: 8 }} role="img" aria-label="Efero logo">
      <svg width="20" height="18" viewBox="0 0 20 18" fill={iconColor}>
        <rect x="0" y="0"  width="20" height="5" rx="2"/>
        <rect x="0" y="6.5" width="14" height="5" rx="2"/>
        <rect x="0" y="13" width="20" height="5" rx="2"/>
      </svg>
      <span className="text-[20px] font-bold" style={{ color: textColor }}>Efero</span>
    </div>
  )
}
