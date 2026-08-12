import type { Metadata } from 'next'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Priser',
  description:
    'Efero fra 690 kr/mnd eks. mva. Tydelige pakker, 119 kr per ekstra feltbruker, ingen binding eller etableringsavgift og 30 dager gratis.',
  path: '/priser',
  keywords: ['efero pris', 'håndverker program pris', 'jobbstyring pris norge'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
