import { graphql } from 'gatsby';
import React from 'react';

import { poetryPageQuery as PoetryPageQuery } from './__generated__/poetryPageQuery';

import PoetryLayout from 'components/layouts/PoetryLayout';
import ItemsList from 'components/shared/ItemsList';
import { TitleBlock, SubtitleBlock } from 'styles/Typography';

export interface IPortfolioProps {
  data: PoetryPageQuery;
}

const PoetryPage: React.FC<IPortfolioProps> = ({ data }) => {
  if (!data) {
    return null;
  }

  const poetryItems = data?.poetry.edges;
  const categoriesItems = data?.categories.edges;

  return (
    <PoetryLayout
      headTitle="Ckomop0x.me | Мои стихи и песни"
      ogUrl="https://ckomop0x.me/poetry/"
      ogDescription="Ckomop0x.me | Мои стихи и песни"
      twitterCard="Мои стихи и песни написанные в разное время, в разных городах и странах"
    >
      <div className="container">
        <TitleBlock>Стихи и песни</TitleBlock>
        <SubtitleBlock>
          Мои стихи и песни написанные в разное время, в разных городах и
          странах
        </SubtitleBlock>
        {poetryItems && (
          <ItemsList items={poetryItems} categories={categoriesItems} />
        )}
      </div>
    </PoetryLayout>
  );
};

export const query = graphql`
  query poetryPageQuery {
    poetry: allStrapiPosts(
      filter: { category: { eq: "poetry" } }
      sort: { fields: [createdAt], order: [DESC] }
      limit: 100
    ) {
      edges {
        node {
          ...PostFields
        }
      }
    }
    categories: allStrapiCategories {
      edges {
        ...StrapiCategories
      }
    }
  }
`;

export default PoetryPage;
