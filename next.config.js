/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["metadata.ens.domains", "www.simplilearn.com"],
    formats: ['image/avif', 'image/webp'],
  },
  formats: {
    'image/svg+xml': {
      'loader': 'default',
      'path': '',
      'publicPath': '/_next/image',
      'outputPath': 'static/image/',
      'options': {
        // Allow SVG
        dangerouslyAllowSVG: true,
      },
    },
  }
}

module.exports = nextConfig
