/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.lucyinthesky.com',
      },
    ],
  },
  publicRuntimeConfig: {
    API_ROUTE: process.env.API
  },
  env: {
    API_ROUTE: process.env.API,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}


module.exports = nextConfig
