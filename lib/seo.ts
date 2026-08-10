export const SITE_URL = 'https://efero.no'
export const SITE_NAME = 'Efero'
export const SITE_EMAIL = 'kontakt@efero.no'
export const SITE_LOCALE = 'nb_NO'

export const DEFAULT_OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Efero — Ett enkelt system for hele arbeidsdagen',
}

type MetaInput = {
  title: string
  description: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
}

export function pageMeta({ title, description, path = '', keywords, noIndex }: MetaInput) {
  const isHome = !path || path === '/'
  const url = isHome
    ? SITE_URL
    : `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
  const ogTitle = isHome ? title : `${title} | ${SITE_NAME}`
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: 'website' as const,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: ogTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  }
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-icon.png`,
  email: SITE_EMAIL,
  areaServed: 'NO',
  contactPoint: {
    '@type': 'ContactPoint',
    email: SITE_EMAIL,
    contactType: 'customer service',
    availableLanguage: ['Norwegian', 'nb'],
  },
  sameAs: [SITE_URL],
}

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  url: SITE_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'iOS, Android, Web',
  inLanguage: 'nb-NO',
  description:
    'Efero hjelper håndverksbedrifter med å drive hele arbeidsdagen i ett enkelt system: kunder, jobber, tilbud, timer, materialer, sjekklister, HMS og faktura.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'NOK',
    description: '30 dager gratis prøveperiode',
  },
  featureList: [
    'Kunder, jobber, ansatte og timeplaner',
    'Tilbud, godkjenninger, endringer og faktura',
    'Timer, materialer, innkjøp og lønnsomhet per jobb',
    'Periodisk vedlikehold og utstyr hos kunden',
    'Sjekklister, risikovurderinger og servicerapporter',
    'Timeføring, bilder og rapporter fra mobil',
  ],
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  },
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
