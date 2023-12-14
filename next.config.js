/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["metadata.ens.domains", "www.simplilearn.com"],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
