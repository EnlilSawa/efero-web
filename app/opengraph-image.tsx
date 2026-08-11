import { ImageResponse } from 'next/og'
import { EferoSocialImage } from '@/components/EferoSocialImage'

export const alt = 'Efero — Ett enkelt system for hele arbeidsdagen'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    <EferoSocialImage title="Ett enkelt system for hele arbeidsdagen" />,
    { ...size },
  )
}
