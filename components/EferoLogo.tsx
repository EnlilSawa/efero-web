export default function EferoLogo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  return (
    <img
      src="/images/logo-dark.png"
      alt="Efero logo"
      height={32}
      style={{
        width: 'auto',
        filter: variant === 'white' ? 'brightness(0) invert(1)' : 'none',
      }}
    />
  )
}
