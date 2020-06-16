import { graphql } from 'gatsby';
import React from 'react';

import { MainPageLayout } from '@components/containers';
import { PostsList, Hero } from '@components/sections';
import { TitleBlock, SubtitleBlock } from '@styles/Typography';

export const query = graphql`
  query IndexPageQuery {
    featured: allStrapiPosts(filter: { featured: { eq: true } }, limit: 1) {
      edges {
        node {
          ...PostFields
        }
      }
    }

    poetry: allStrapiPosts(
      filter: { category: { eq: "poetry" }, featured: { eq: false } }
      sort: { fields: [createdAt], order: [DESC] }
      limit: 3
    ) {
      edges {
        node {
          ...PostFields
        }
      }
    }
    blog: allStrapiPosts(
      filter: { category: { eq: "blog" }, featured: { eq: false } }
      sort: { fields: [createdAt], order: [DESC] }
      limit: 3
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

export default (props: any) => {
  const { data, errors } = props;
  const featuredItem = data && data.featured.edges;
  const poetryItems = data && data.poetry.edges;
  const blogItems = data && data.blog.edges;
  const categoriesItems = data && data.categories.edges;

  console.log('featuredItem', featuredItem);

  return (
    <MainPageLayout>
      <Hero
        title="Стихи, песни, путешествия и заметки"
        subtitle="Привет, здесь живут мои стихи, песни, путешествия, заметки и фотографий."
      />
      <section>
        <PostsList items={featuredItem} categories={categoriesItems} />
      </section>
      <section>
        <div className="container">
          <TitleBlock>Пробуй и Путешествуй</TitleBlock>
          <SubtitleBlock>
            Каждый новый вкус, запах звук раскрывает нас всё больше и больше и
            больше! Только так ты сможешь лучше узнать мир и себя. Будь смелее в
            своих желаниях.
          </SubtitleBlock>
          <PostsList items={blogItems} categories={categoriesItems} />
        </div>
      </section>
      <section>
        <div className="container">
          <TitleBlock>Твори</TitleBlock>
          <SubtitleBlock>
            Пиши, играй, пой, делай то, что тебе нравится и чувствуй
            вдохновение!
          </SubtitleBlock>
          <PostsList items={poetryItems} categories={categoriesItems} />
        </div>
      </section>
    </MainPageLayout>
  );
};
