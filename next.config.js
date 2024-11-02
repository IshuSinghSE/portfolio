/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/portfolio/',
  basePath: '/portfolio',
  output: 'export',
};

module.exports = nextConfig