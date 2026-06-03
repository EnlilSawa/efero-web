export default function EferoLogo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  return (
    <img
      src="/images/logo-dark.png"
      alt="Efero logo"
      style={{
        height: '48px',
        width: 'auto',
        maxWidth: '180px',
        objectFit: 'contain',
        display: 'block',
        filter: variant === 'white' ? 'brightness(0) invert(1)' : 'none',
      }}
    />
  )
}
