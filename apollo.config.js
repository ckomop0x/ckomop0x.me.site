module.exports = {
  client: {
    addTypename: false,
    excludes: [],
    includes: [
      './src/**/*.tsx',
      './src/**/*.ts',
      './src/pages/**/*.ts',
      './src/__generated__/**/*.ts',
      './plugins/**/*.js',
      // './node_modules/gatsby-source-contentful/src/*.js',
      // './node_modules/gatsby-source-datocms/fragments/*.js',
      './node_modules/gatsby-transformer-sharp/src/*.js',
      './node_modules/gatsby-image/src/*.js',
    ],
    service: {
      name: 'gatsbySchema',
      localSchemaFile: './src/__generated__/gatsby-introspection.json',
    },
    tagName: 'graphql',
  },
};
