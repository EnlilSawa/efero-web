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
export default nextConfig
