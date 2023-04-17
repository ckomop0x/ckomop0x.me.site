/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
