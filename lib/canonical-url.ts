import { SITE_URL } from '@/lib/seo'

const CANONICAL_HOST = new URL(SITE_URL).hostname
const PUBLIC_HOSTS = new Set([CANONICAL_HOST, `www.${CANONICAL_HOST}`])

type CanonicalRequest = {
  url: string
  host?: string | null
  forwardedHost?: string | null
  forwardedProto?: string | null
}

function firstHeaderValue(value?: string | null) {
  return value?.split(',')[0]?.trim()
}

/**
 * Returnerer kanonisk produksjons-URL når en offentlig forespørsel bruker
 * HTTP eller www. Lokale adresser og preview-domener blir aldri omskrevet.
 */
export function canonicalRedirectUrl({
  url,
  host,
  forwardedHost,
  forwardedProto,
}: CanonicalRequest) {
  const incoming = new URL(url)
  const requestedHost = firstHeaderValue(forwardedHost) ?? firstHeaderValue(host) ?? incoming.host
  const hostname = requestedHost.split(':')[0]?.toLowerCase()

  if (!hostname || !PUBLIC_HOSTS.has(hostname)) return null

  const protocol = firstHeaderValue(forwardedProto)?.toLowerCase() ?? incoming.protocol.replace(':', '')
  if (protocol === 'https' && hostname === CANONICAL_HOST) return null

  const destination = new URL(`${incoming.pathname}${incoming.search}`, SITE_URL)
  return destination.toString()
}
