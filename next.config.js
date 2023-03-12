/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      {
        loader: 'next/font/google',
        options: { subsets: ['latin', 'cyrillic'] },
      },
    ],
  },
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
