/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // Add any image domains you need here
  },
  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Ensure proper routing
  trailingSlash: false,
  // Handle Google Fonts properly
  experimental: {
    optimizeFonts: true,
  },
  // Enable static exports if needed
  // output: 'export', // Uncomment if you need static export
}

module.exports = nextConfig 