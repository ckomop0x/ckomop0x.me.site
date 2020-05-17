import { graphql } from 'gatsby';
import React from 'react';
import PoetryLayout from '../containers/PoetryLayout/PoetryLayout';
import ItemsList from '@components/ItemsList';
import { poetryPageQuery as PoetryPageQuery } from './__generated__/poetryPageQuery';

export const query = graphql`
  query poetryPageQuery {
    poetry: allStrapiPosts(
      filter: { category: { eq: "poetry" } }
      sort: { fields: [createdAt], order: [DESC] }
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
          createdAt
          updatedAt
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
  data: PoetryPageQuery;
  errors: any;
}

const PoetryPage: React.FC<IPortfolioProps> = (props) => {
  if (!props.data) {
    return null;
  }

  const { data, errors } = props;
  const poetryItems = data && data.poetry.edges;
  const categoriesItems = data && data.categories.edges;

  return (
    <PoetryLayout
      headTitle="Ckomop0x.me | Мои стихи"
      ogUrl="https://ckomop0x.me/poetry/"
      ogDescription="Ckomop0x.me | Мои стихи"
      twitterCard="Мои стихи написанные в разное время, в разных городах и странах"
    >
      <div className="container">
        {poetryItems && (
          <ItemsList items={poetryItems} categories={categoriesItems} />
        )}
      </div>
    </PoetryLayout>
  );
};

export default PoetryPage;
