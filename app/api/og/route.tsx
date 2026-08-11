import { ImageResponse } from 'next/og'
import { EferoSocialImage } from '@/components/EferoSocialImage'

const FALLBACK_TITLE = 'Ett enkelt system for hele arbeidsdagen'

function clean(value: string | null, maxLength: number) {
  return value?.replace(/\s+/g, ' ').trim().slice(0, maxLength) || ''
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = clean(searchParams.get('title'), 90) || FALLBACK_TITLE
  const description = clean(searchParams.get('description'), 150)

  return new ImageResponse(
    <EferoSocialImage title={title} description={description || undefined} />,
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=31536000, immutable',
      },
    },
  )
}
