import type { Metadata } from 'next'
import { HomeContent } from '@/components/HomeContent'
import { pageMeta, softwareApplicationSchema, webPageSchema } from '@/lib/seo'

const description = 'Efero samler kunder, oppdrag, tilbud, timer, materialer, HMS og fakturagrunnlag for norske håndverksbedrifter – i ett enkelt system.'

export const metadata: Metadata = {
  ...pageMeta({
    title: 'Efero — Ett enkelt system for hele arbeidsdagen',
    description,
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            softwareApplicationSchema,
            webPageSchema({
              name: 'Efero — Ett enkelt system for hele arbeidsdagen',
              description,
              path: '/',
            }),
          ]),
        }}
      />
      <HomeContent />
    </>
  )
}
