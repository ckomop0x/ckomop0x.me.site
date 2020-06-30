// Load variables from `.env` as soon as possible
require('dotenv').config({
  // path: `.env.${process.env.NODE_ENV || 'development'}`,
  path: `.env`,
});
const path = require('path');
const config = require('./config/site');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.description,
    author: config.author,
    siteUrl: config.siteUrl,
    keywords: ['стихи', 'песни', 'путешествия', 'заметки', 'фотографии'],
    canonicalUrl: config.siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author,
      minibio: config.minibio,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.siteLogo,
    },
    social: {
      twitter: config.twitterHandle,
      fbAppID: '',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        allowSyntheticDefaultImports: true,
      },
    },
    'gatsby-plugin-typescript-checker',
    {
      resolve: 'gatsby-plugin-codegen',
      options: {},
    },
    'gatsby-plugin-scss-typescript',
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV === 'development' ? true : false,
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [`posts`, `categories`],
        //If using single types place them in this array.
        // singleTypes: [`home-page`, `contact`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-sass`,
    //   options: {
    //     // Override the file regex for SASS
    //     sassRuleTest: /\.global\.s(a|c)ss$/,
    //     // Override the file regex for CSS modules
    //     sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
    //   },
    // },
    // 'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        lang: config.lang,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/images/favicon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/favicon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-robots-txt',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        // The ID of yandex metrika.
        trackingId: 57227728,
        // Enabled a webvisor. The default value is `false`.
        webvisor: true,
        // Enables tracking a hash in URL. The default value is `false`.
        trackHash: true,
        // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
        // and `true` means after the body (faster loading, less hits). The default value is `false`.
        afterBody: true,
        // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
        // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
        defer: false,
        // Detailed recordings of user activity on the site: mouse movement, scrolling, and clicks.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
