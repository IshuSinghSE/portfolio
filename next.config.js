/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '',
  output: 'standalone',
  // SWC is disabled due to the presence of a custom Babel configuration (.babelrc)
};

module.exports = nextConfig;