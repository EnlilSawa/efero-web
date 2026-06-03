export function EferoLogo({ light = false }: { light?: boolean }) {
  const iconColor = '#2563FF'
  const textColor = light ? '#FFFFFF' : '#0A1B33'
  return (
    <div className="flex items-center select-none" style={{ gap: 8 }} role="img" aria-label="Efero logo">
      <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
        <g transform="translate(9,0) skewX(-20)">
          <rect y="0"  width="15" height="6" rx="2" fill={iconColor}/>
          <rect y="8"  width="10" height="6" rx="2" fill={iconColor}/>
          <rect y="16" width="15" height="6" rx="2" fill={iconColor}/>
        </g>
      </svg>
      <span className="text-[20px] font-bold" style={{ color: textColor }}>Efero</span>
    </div>
  )
}
