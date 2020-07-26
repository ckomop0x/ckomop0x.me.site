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
      poetry: allStrapiPosts(
        filter: { category: { eq: "poetry" } }
        sort: { fields: date, order: ASC }
      ) {
        edges {
          node {
            category
            content {
              rich_text
            }
            image_url
            slug
            published
            strapiId
            excerpt
            createdAt
            updatedAt
            title
          }
        }
      }
      blog: allStrapiPosts(
        filter: { category: { eq: "blog" } }
        sort: { fields: date, order: ASC }
      ) {
        edges {
          node {
            category
            content {
              rich_text
            }
            image_url
            slug
            published
            strapiId
            excerpt
            createdAt
            updatedAt
            title
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog articles pages.
  const poetry = result.data.poetry.edges;
  const blog = result.data.blog.edges;
  poetry.forEach((post) => {
    createPage({
      path: `/poetry/${post.node.slug}`,
      component: require.resolve('./src/components/templates/poetry-item.tsx'),
      context: {
        slug: post.node.slug,
        post,
      },
    });
  });
  blog.forEach((post) => {
    createPage({
      path: `/blog/${post.node.slug}`,
      component: require.resolve('./src/components/templates/poetry-item.tsx'),
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
