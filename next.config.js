// next.config.js
module.exports = {
  reactStrictMode: true,
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { subsets: ['latin', 'cyrillic'] },
      },
    ],
  },
};
