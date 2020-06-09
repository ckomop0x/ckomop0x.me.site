import { graphql } from 'gatsby';
import React from 'react';
import { Hero } from '@components/sections';

import { MainPageLayout } from '../components/containers';
import ItemsList from '@components/ItemsList';
import { TitleBlock } from '@styles/Typography';

export const query = graphql`
  query IndexPageQuery {
    poetry: allStrapiPosts(
      filter: { category: { eq: "poetry" } }
      sort: { fields: [createdAt], order: [DESC] }
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
          createdAt
          updatedAt
        }
      }
    }
    blog: allStrapiPosts(
      filter: { category: { eq: "blog" } }
      sort: { fields: [createdAt], order: [DESC] }
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

export default (props: any) => {
  const { data, errors } = props;
  const poetryItems = data && data.poetry.edges;
  const blogItems = data && data.blog.edges;
  const categoriesItems = data && data.categories.edges;

  return (
    <MainPageLayout>
      <Hero
        title="Стихи, песни, путешествия и заметки"
        subtitle="Привет, здесь живут мои стихи, песни, путешествия, заметки и фотографий."
      />
      <section>
        <div className="container">
          <TitleBlock>Пробуй и Путешествуй</TitleBlock>
          <h5>
            Каждый новый вкус, запах звук раскрывает нас всё больше и больше и
            больше! Только так ты сможешь лучше узнать мир и себя. Будь смелее в
            своих желаниях.
          </h5>
          <ItemsList items={blogItems} categories={categoriesItems} />
        </div>
      </section>
      <section>
        <div className="container">
          <TitleBlock>Твори</TitleBlock>
          <h5>
            Пиши, играй, пой, делай то, что тебе нравится и чувствуй
            вдохновение!
          </h5>
          <ItemsList items={poetryItems} categories={categoriesItems} />
        </div>
      </section>
    </MainPageLayout>
  );
};
