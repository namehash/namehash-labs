/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["metadata.ens.domains"],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    NEXT_PUBLIC_CONTACT_FORM_API_URL: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/contact-form` : 'http://localhost:3000/api/contact-form',
  },
  async headers() {
    return [
        {
          source: "/api/apps-animation",
          headers: [
            { key: "Access-Control-Allow-Origin", value: "*" },
            { key: "Access-Control-Allow-Methods", value: "GET" },
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
    ]
  }
}

module.exports = nextConfig
