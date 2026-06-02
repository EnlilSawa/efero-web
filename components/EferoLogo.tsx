export function EferoLogo({ light = false }: { light?: boolean }) {
  const text = light ? '#FFFFFF' : '#0A1B33'
  return (
    <div className="flex items-center gap-2 select-none">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2"  y="4"  width="9" height="4" rx="1.5" fill="#2563FF"/>
        <rect x="2"  y="12" width="7" height="4" rx="1.5" fill="#2563FF"/>
        <rect x="2"  y="20" width="9" height="4" rx="1.5" fill="#2563FF"/>
      </svg>
      <span className="text-[20px] font-bold tracking-tight" style={{ color: text }}>Efero</span>
    </div>
  )
}
