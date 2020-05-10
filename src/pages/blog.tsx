import PortfolioItems from '@components/PortfolioItems';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import PoetryLayout from '../containers/PoetryLayout/PoetryLayout';
import ItemsList from '@components/ItemsList';

export const query = graphql`
  query blogPageQuery {
    blog: allStrapiPosts(
      filter: { category: { eq: "blog" } }
      sort: { fields: [createdAt] }
      limit: 100
    ) {
      edges {
        node {
          title
          slug
          published
          strapiId
          excerpt
          category
        }
      }
    }
    categories: allStrapiCategories {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`;

export interface IPortfolioProps {
  data: any;
  errors: any;
}

const PoetryPage: React.FC<IPortfolioProps> = (props) => {
  if (!props.data) {
    return null;
  }

  const { data, errors } = props;
  console.log('data', data);
  const blogItems = data && data.blog.edges;
  const categoriesItems = data && data.categories.edges;

  return (
    <PoetryLayout
      headTitle="Ckomop0x.me | Мои стихи"
      ogUrl="https://ckomop0x.me/poetry/"
      ogDescription="Ckomop0x.me | Мои стихи"
      twitterCard="Мои стихи написанные в разное время, в разных городах и странах"
    >
      <div className="container">
        {blogItems && (
          <ItemsList items={blogItems} categories={categoriesItems} />
        )}
        {/*{poetryItems && <PortfolioItems projects={poetryItems} />}*/}
      </div>
    </PoetryLayout>
  );
};

export default PoetryPage;
