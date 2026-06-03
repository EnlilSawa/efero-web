export function EferoLogo({ light = false }: { light?: boolean }) {
  const iconColor = '#2563FF'
  const textColor = light ? '#FFFFFF' : '#0A1B33'
  return (
    <div className="flex items-center select-none" style={{ gap: 8 }} role="img" aria-label="Efero logo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill={iconColor}>
        {/* Øverste streik — full bredde */}
        <path d="M 8.5,1.4 Q 9,0 10.5,0 L 22.5,0 Q 24,0 23.5,1.4 L 22.3,4.6 Q 21.75,6 20.25,6 L 8.25,6 Q 6.75,6 7.3,4.6 Z"/>
        {/* Midterste streik — kortere */}
        <path d="M 5.1,10.4 Q 5.625,9 7.125,9 L 14.125,9 Q 15.625,9 15.1,10.4 L 13.9,13.6 Q 13.375,15 11.875,15 L 4.875,15 Q 3.375,15 3.9,13.6 Z"/>
        {/* Nederste streik — full bredde */}
        <path d="M 1.7,19.4 Q 2.25,18 3.75,18 L 15.75,18 Q 17.25,18 16.7,19.4 L 15.5,22.6 Q 15,24 13.5,24 L 1.5,24 Q 0,24 0.5,22.6 Z"/>
      </svg>
      <span className="text-[20px] font-bold" style={{ color: textColor }}>Efero</span>
    </div>
  )
}
