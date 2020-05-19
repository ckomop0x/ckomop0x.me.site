// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

module.exports = {
  siteMetadata: {
    title: `ckomop0x.me – блок Павла Клочкова`,
    description: `Мой блог со стихами, событиями и путешествиями`,
    author: `@ckomop0x`,
    siteUrl: `https://ckomop0x.me`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV === 'development' ? true : false,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        allowSyntheticDefaultImports: true,
      },
    },
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
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-scss-typescript',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-codegen',
      options: {},
    },
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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Override the file regex for SASS
        sassRuleTest: /\.global\.s(a|c)ss$/,
        // Override the file regex for CSS modules
        sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
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
      resolve: `gatsby-plugin-yandex-metrica`,
      options: {
        trackingId: '57227728',
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        trackHash: true,

        // Detailed recordings of user activity on the site: mouse movement, scrolling, and clicks.
        webvisor: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
