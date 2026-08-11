import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

/**
 * AI-crawlere får eksplisitt tillatelse. Cloudflare kan legge inn en «managed
 * robots.txt»-blokk som stenger dem ute; egne grupper med samme user-agent
 * slås sammen av crawlerne, og ved lik spesifisitet vinner Allow.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'Bingbot',
  'meta-externalagent',
  'Amazonbot',
  'CCBot',
  'DuckAssistBot',
  'cohere-ai',
  'YouBot',
  'MistralAI-User',
]

const DISALLOW = ['/tilbud/', '/api/']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      ...AI_CRAWLERS.map(userAgent => ({ userAgent, allow: '/', disallow: DISALLOW })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
