/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '',
  output: 'standalone',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;