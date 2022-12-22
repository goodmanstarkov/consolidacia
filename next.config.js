// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  compress: false, // По умолчанию next использует GZIP для сжатия, но лучше сжимает Brotli, который включается в nginx.
  images: {
    loader: 'imgix',
    path: '/',
  },
}

module.exports = nextConfig
