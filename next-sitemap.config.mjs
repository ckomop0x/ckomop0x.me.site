/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: process.env.SITE_URL || 'https://ckomop0x.me',
  generateRobotsTxt: true, // (optional),
  exclude: ['/poetry-test', '/test'], // (optional),
  outDir: './out',
};
