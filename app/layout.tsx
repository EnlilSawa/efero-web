import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Efero — Jobb enkelt. Fakturer raskt.',
  description: 'Efero samler jobber, team og fakturering i én app. Bygget for norske håndverkere.',
  metadataBase: new URL('https://efero.app'),
  openGraph: {
    title: 'Efero — Jobb enkelt. Fakturer raskt.',
    description: 'Enkel jobb- og fakturaadministrasjon for norske håndverkere.',
    siteName: 'Efero',
    locale: 'nb_NO',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
