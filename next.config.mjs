import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/coming-soon',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/admin-access',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

initOpenNextCloudflareForDev()

export default nextConfig
