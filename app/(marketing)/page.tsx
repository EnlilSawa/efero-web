import type { Metadata } from 'next'
import { HomeContent } from '@/components/HomeContent'
import { pageMeta, softwareApplicationSchema } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMeta({
    title: 'Efero — Ett enkelt system for hele arbeidsdagen',
    description:
      'Ett system for hele arbeidsdagen: tilbud, jobber, timer, materialer, sjekklister og faktura — med app for montørene. 30 dager gratis.',
    path: '/',
    keywords: [
      'ordresystem håndverker',
      'timeføring app',
      'tilbud og faktura',
      'HMS sjekklister',
      'servicerapport app',
      'jobbstyring håndverk',
      'montørapp iOS Android',
    ],
  }),
  title: {
    absolute: 'Efero — Ett enkelt system for hele arbeidsdagen',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <HomeContent />
    </>
  )
}
