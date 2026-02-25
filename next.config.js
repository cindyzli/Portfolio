/** @type {import('next').NextConfig} */
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGhPages ? '/Portfolio' : undefined,
  assetPrefix: isGhPages ? '/Portfolio/' : undefined,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
