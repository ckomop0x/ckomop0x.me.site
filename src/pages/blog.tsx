import { graphql } from 'gatsby';
import React from 'react';
import PoetryLayout from '../components/containers/PoetryLayout/PoetryLayout';
import ItemsList from '@components/blocks/ItemsList';
import { TitleBlock, SubtitleBlock } from '@styles/Typography';

export const query = graphql`
  query blogPageQuery {
    blog: allStrapiPosts(
      filter: { category: { eq: "blog" } }
      sort: { fields: [createdAt] }
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
  data: any;
  errors: any;
}

const PoetryPage: React.FC<IPortfolioProps> = (props) => {
  if (!props.data) {
    return null;
  }

  const { data, errors } = props;
  const blogItems = data && data.blog.edges;
  const categoriesItems = data && data.categories.edges;

  return (
    <PoetryLayout
      headTitle="Ckomop0x.me | Статьи и публикации"
      ogUrl="https://ckomop0x.me/poetry/"
      ogDescription="Ckomop0x.me | Статьи и публикации"
      twitterCard="Ckomop0x.me | Статьи и публикации"
    >
      <div className="container">
        <TitleBlock>Блог</TitleBlock>
        <SubtitleBlock>Мои статьи и публикации на разные темы.</SubtitleBlock>
        {blogItems && (
          <ItemsList items={blogItems} categories={categoriesItems} />
        )}
      </div>
    </PoetryLayout>
  );
};

export default PoetryPage;
