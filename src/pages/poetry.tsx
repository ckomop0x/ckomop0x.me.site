import { graphql } from 'gatsby';
import React from 'react';
import PoetryLayout from '../components/containers/PoetryLayout/PoetryLayout';
import ItemsList from '@components/blocks/ItemsList';
import { poetryPageQuery as PoetryPageQuery } from './__generated__/poetryPageQuery';
import { TitleBlock, SubtitleBlock } from '@styles/Typography';

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

export default PoetryPage;
