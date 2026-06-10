import type { Metadata } from 'next'
import { ComingSoon } from '@/components/ComingSoon'
import { getWaitlistCount } from './actions/waitlist'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Efero — Kommer snart',
  description: 'Efero er jobbstyring, fakturering og teamoversikt i én enkel app — bygget for norske håndverkere. Meld deg på ventelisten i dag.',
  alternates: { canonical: 'https://efero.app' },
  openGraph: {
    title: 'Efero — Kommer snart',
    description: 'Efero er jobbstyring, fakturering og teamoversikt i én enkel app — bygget for norske håndverkere. Meld deg på ventelisten i dag.',
    url: 'https://efero.app',
    type: 'website',
  },
  twitter: {
    title: 'Efero — Kommer snart',
    description: 'Efero er jobbstyring, fakturering og teamoversikt i én enkel app — bygget for norske håndverkere. Meld deg på ventelisten i dag.',
  },
}

export default async function Home() {
  const count = await getWaitlistCount()
  return <ComingSoon initialCount={count} />
}
