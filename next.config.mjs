import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Sidens lille globale stilark legges direkte i HTML og fjerner en
    // render-blokkerende nettverksrunde før hovedoverskriften kan vises.
    inlineCss: true,
  },
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
