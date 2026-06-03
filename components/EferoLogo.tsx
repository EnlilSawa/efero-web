export function EferoLogo({ light = false }: { light?: boolean }) {
  const iconColor = light ? '#FFFFFF' : '#2563FF'
  const textColor = light ? '#FFFFFF' : '#0A1B33'
  return (
    <div className="flex items-center select-none" style={{ gap: 8 }}>
      <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
        <rect x="0" y="0"  width="18" height="6" rx="2" fill={iconColor}/>
        <rect x="0" y="9"  width="14" height="6" rx="2" fill={iconColor}/>
        <rect x="0" y="18" width="18" height="6" rx="2" fill={iconColor}/>
      </svg>
      <span className="text-[20px] font-semibold tracking-tight" style={{ color: textColor }}>Efero</span>
    </div>
  )
}
