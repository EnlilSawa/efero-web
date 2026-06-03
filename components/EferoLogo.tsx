export function EferoLogo({ light = false }: { light?: boolean }) {
  const iconColor = '#2563FF'
  const textColor = light ? '#FFFFFF' : '#0A1B33'
  return (
    <div className="flex items-center select-none" style={{ gap: 8 }}>
      <svg width="22" height="24" viewBox="0 0 22 24" fill="none">
        <g transform="translate(6,0) skewX(-12)">
          <rect y="0"  width="15" height="6" rx="1.5" fill={iconColor}/>
          <rect y="9"  width="12" height="6" rx="1.5" fill={iconColor}/>
          <rect y="18" width="15" height="6" rx="1.5" fill={iconColor}/>
        </g>
      </svg>
      <span className="text-[20px] font-semibold tracking-tight" style={{ color: textColor }}>Efero</span>
    </div>
  )
}
