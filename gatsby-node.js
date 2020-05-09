const { isFuture } = require('date-fns');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      posts: allStrapiPosts(sort: { fields: date, order: ASC }) {
        edges {
          node {
            id
            title
            updatedAt
            createdAt
            excerpt
            published
            slug
            strapiId
            description
            image_url
            image {
              childImageSharp {
                fluid {
                  srcSet
                  originalImg
                  originalName
                  tracedSVG
                  srcSetWebp
                  srcWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog articles pages.
  const posts = result.data.posts.edges;
  posts.forEach((post, index) => {
    createPage({
      path: `/poetry/${post.node.slug}`,
      component: require.resolve('./src/templates/poetry-item.tsx'),
      context: {
        slug: post.node.slug,
        post,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
