import Image from 'next/image'

export default function EferoLogo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  return (
    <div style={{ filter: variant === 'white' ? 'brightness(0) invert(1)' : 'none' }}>
      <Image
        src="/images/logo-dark.png"
        alt="Efero logo"
        width={240}
        height={64}
        style={{ width: 'auto', height: '64px', objectFit: 'contain' }}
        priority
      />
    </div>
  )
}
