/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/Portfolio' : undefined,
  assetPrefix: isProd ? '/Portfolio/' : undefined,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
