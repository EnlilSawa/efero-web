import type { Metadata } from 'next'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Priser',
  description:
    'Enkel og transparent prising for håndverkerbedrifter. Velg pakken som passer ditt team. Start med 30 dagers gratis prøveperiode.',
  path: '/priser',
  keywords: ['efero pris', 'håndverker program pris', 'jobbstyring pris norge'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
