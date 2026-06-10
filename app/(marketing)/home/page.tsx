import type { Metadata } from 'next'
import { HomeContent } from '@/components/HomeContent'

export const metadata: Metadata = {
  title: 'Efero — Jobbstyring og fakturering for håndverkere',
  description: 'Efero er appen som samler jobber, team og faktura i én løsning. Bygget for norske rørleggere, elektrikere og snekkere. Start gratis i dag.',
  keywords: [
    'håndverker app', 'rørlegger program', 'elektriker app', 'jobbstyring håndverk',
    'faktura håndverker', 'VVS program', 'snekker app', 'håndverkerbedrift',
    'arbeidsordre app norge', 'fakturaprogram håndverker',
  ],
  alternates: { canonical: 'https://efero.app/home' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Efero — Jobbstyring og fakturering for håndverkere',
    description: 'Efero er appen som samler jobber, team og faktura i én løsning. Bygget for norske rørleggere, elektrikere og snekkere. Start gratis i dag.',
    url: 'https://efero.app/home',
    type: 'website',
  },
  twitter: {
    title: 'Efero — Jobbstyring og fakturering for håndverkere',
    description: 'Efero er appen som samler jobber, team og faktura i én løsning. Bygget for norske rørleggere, elektrikere og snekkere. Start gratis i dag.',
  },
}

export default function HomePage() {
  return <HomeContent />
}
