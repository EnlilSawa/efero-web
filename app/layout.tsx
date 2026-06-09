import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CookieBanner } from '@/components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://efero.app'),
  title: {
    template: '%s',
    default: 'Efero — Jobbstyring og fakturering for håndverkere',
  },
  description: 'Efero er appen som samler jobber, team og faktura i én løsning. Bygget for norske rørleggere, elektrikere og snekkere. Start gratis i dag.',
  openGraph: {
    siteName: 'Efero',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image'],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Efero',
  url: 'https://efero.app',
  logo: 'https://efero.app/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'kontakt@efero.no',
    contactType: 'customer service',
    availableLanguage: 'Norwegian',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
