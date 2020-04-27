// -- The Link Resolver
// This function will be used to generate links to Prismic documents
// As your project grows, you should update this function according to your routes

const linkResolver = (document: any) => {
  // Route for blog posts
  // console.log('DOC ==>', document);

  if (document.type === 'portfolio_item') {
    return '/portfolio/' + document.uid;
  }

  if (document.path === 'portfolio') {
    return '/portfolio/';
  }

  // Homepage route fallback
  return '/';
};

export default linkResolver;
