export default function EferoLogo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  return (
    <img
      src="/images/logo-dark.png"
      alt="Efero logo"
      style={{
        height: '28px',
        width: 'auto',
        maxWidth: '120px',
        objectFit: 'contain',
        display: 'block',
        filter: variant === 'white' ? 'brightness(0) invert(1)' : 'none',
      }}
    />
  )
}
