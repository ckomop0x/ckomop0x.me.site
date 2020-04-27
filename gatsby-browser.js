const { registerLinkResolver } = require('gatsby-source-prismic-graphql');

const linkResolver = (document) => {
  // Route for blog posts
  // console.log('DOC ==>', document);

  if (document.path === '/portfolio/') {
    return '/portfolio/';
  }

  if (document.type === 'portfolio_item') {
    return '/portfolio/' + document.uid;
  }

  // Homepage route fallback
  return '/';
};

exports.onRouteUpdate = ({ location, prevLocation }) => {
  registerLinkResolver(linkResolver({ path: location.pathname }));
};

registerLinkResolver(linkResolver);
