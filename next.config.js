/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'm.media-amazon.com',
      'upload.wikimedia.org',
      'i.imgur.com'
    ],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  basePath: ''
}

module.exports = nextConfig