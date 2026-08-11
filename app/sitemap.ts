import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

type Entry = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const ENTRIES: Entry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/funksjoner', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/bransjer', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/om-oss', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/kontakt', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/kom-i-gang', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/priser', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/personvern', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/vilkar', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/databehandleravtale', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return ENTRIES.map(({ path, changeFrequency, priority }) => ({
    url: path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
