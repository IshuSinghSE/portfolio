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
  assetPrefix: isProd ? '/IshuSinghSE.github.io/' : '/',
  basePath: isProd ? '/IshuSinghSE.github.io' : '',
  output: 'standalone'
};

module.exports = nextConfig