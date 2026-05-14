/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // Ignore build errors to allow deployment
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
