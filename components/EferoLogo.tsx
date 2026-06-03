export default function EferoLogo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  return (
    <div style={{ background: 'transparent', lineHeight: 0 }}>
      <img
        src="/images/logo-dark.png"
        alt="Efero logo"
        style={{
          background: 'transparent',
          height: '48px',
          width: 'auto',
          maxWidth: '180px',
          objectFit: 'contain',
          display: 'block',
          filter: variant === 'white' ? 'brightness(0) invert(1)' : 'none',
        }}
      />
    </div>
  )
}
