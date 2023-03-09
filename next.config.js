/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.mayoral.com']
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
