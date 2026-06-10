import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Priser — Efero jobbstyring for håndverkere',
  description: 'Enkel og transparent prising for håndverkerbedrifter. Velg pakken som passer ditt team. Start med 30 dagers gratis prøveperiode.',
  alternates: { canonical: 'https://efero.app/priser' },
  openGraph: {
    title: 'Priser — Efero jobbstyring for håndverkere',
    description: 'Enkel og transparent prising for håndverkerbedrifter. Velg pakken som passer ditt team. Start med 30 dagers gratis prøveperiode.',
    url: 'https://efero.app/priser',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
