import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { canonicalRedirectUrl } from '@/lib/canonical-url'

export function middleware(request: NextRequest) {
  const destination = canonicalRedirectUrl({
    url: request.url,
    host: request.headers.get('host'),
    forwardedHost: request.headers.get('x-forwarded-host'),
    forwardedProto: request.headers.get('x-forwarded-proto'),
  })

  return destination
    ? NextResponse.redirect(destination, 308)
    : NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
