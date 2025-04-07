/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'admin.ckomop0x.me',
        port: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8300',
      },
      {
        protocol: 'https',
        hostname: 'ckme-admin-pr-*.onrender.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'market-assets.strapi.io',
        port: '',
      },
    ],
  },
};

export default nextConfig;
