export default function EferoLogo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  return (
    <div style={{
      border: 'none',
      background: 'transparent',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      padding: 0,
      margin: 0,
      lineHeight: 0,
    }}>
      <img
        src="/images/logo-dark.png"
        alt="Efero logo"
        style={{
          border: 'none',
          background: 'transparent',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          outline: 'none',
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
