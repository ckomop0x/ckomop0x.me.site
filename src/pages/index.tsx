import { graphql } from 'gatsby';
import React from 'react';

import MainContent from '@components/MainContent';
import { Hero } from '@components/sections';
import Portfolio from '@components/Portfolio';
import Helmet from 'react-helmet';

import { MainPageLayout } from '../containers';
import { TitleBlock } from '@styles/TitleBlock';
import ItemsList from '@components/ItemsList';

export const query = graphql`
  query IndexPageQuery {
    poetry: allStrapiPosts(
      filter: { category: { eq: "poetry" } }
      sort: { fields: [createdAt] }
      limit: 4
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
    blog: allStrapiPosts(
      filter: { category: { eq: "blog" } }
      sort: { fields: [createdAt] }
      limit: 4
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

export default (props: any) => {
  const { data, errors } = props;
  const poetryItems = data && data.poetry.edges;
  const blogItems = data && data.blog.edges;
  const categoriesItems = data && data.categories.edges;

  return (
    <MainPageLayout>
      <Hero
        title="Стихи, песни и путешествия"
        subtitle="Персональный блог Павла Клочкова"
      />
      <div className="container">
        {/*<TitleBlock>Публикации</TitleBlock>*/}
        <h2>Публикации</h2>
        <ItemsList items={blogItems} categories={categoriesItems}/>
        {/*<ItemsList queryName="blog" amount={4} category="news" />*/}
        {/*<TitleBlock>Стихи</TitleBlock>*/}
        <h2>Стихи</h2>
        <ItemsList items={poetryItems} categories={categoriesItems}/>
      </div>
      {/*<MainContent content={content} />*/}
      {/*{errors && <div>Ошибка загрузки</div>}*/}
      {/*{projects && <Portfolio projects={projects} />}*/}
    </MainPageLayout>
  );
};
