// next.config.js
const domain = process.env.HOST || process.env.DEPLOY_URL || process.env.URL;

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};
