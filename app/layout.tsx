import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { organizationSchema, SITE_URL } from '@/lib/seo'

const sans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Efero — Ett enkelt system for hele arbeidsdagen',
    template: '%s | Efero',
  },
  description:
    'Efero hjelper håndverksbedrifter med å drive hele arbeidsdagen i ett enkelt system: kunder, jobber, tilbud, timer, materialer, sjekklister, HMS og faktura.',
  applicationName: 'Efero',
  authors: [{ name: 'Efero', url: SITE_URL }],
  creator: 'Efero',
  publisher: 'Efero',
  category: 'business software',
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    siteName: 'Efero',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Efero' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: '/images/logo-icon.png',
  },
  other: {
    'llms-txt': 'https://efero.no/llms.txt',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className={sans.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
