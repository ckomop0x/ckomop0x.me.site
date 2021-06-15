import { gql } from '@apollo/client';

import { IndexPageQuery } from './__generated__/IndexPageQuery';

import MainPageLayout from 'components/layouts/MainPageLayout';
import FeaturedPost from 'components/sections/FeaturedPost';
import Hero from 'components/sections/Hero';
import PostsList from 'components/sections/PostsList';
import apolloClient from 'utils/api/apollo-client';

interface IIndexPage {
  // data: IndexPageQuery;
  data: any;
}

export default function IndexPage({ data = [] }: IIndexPage) {
  console.log('data', data);

  const [featuredItem] = data?.featured;
  const poetryItems = data?.poetry?.edges;
  const blogItems = data?.blog?.edges;
  const categoriesItems = data?.categories?.edges;

  return (
    <MainPageLayout>
      <Hero
        title="Добро пожаловать в мой персональный блог"
        subtitle="Здесь живут мои стихи, песни, путешествия, заметки и фотографий."
      />
      {featuredItem && (
        <FeaturedPost post={featuredItem} categories={categoriesItems} />
      )}
      {blogItems?.length && (
        <PostsList
          items={blogItems}
          categories={categoriesItems}
          blockTitle="Статьи и публикации"
          blockSubtitle="Каждый новый вкус, запах звук раскрывает нас всё больше и больше и больше! Только так ты сможешь лучше узнать мир и себя. Будь смелее в своих желаниях."
        />
      )}

      {poetryItems?.length > 0 && (
        <PostsList
          items={poetryItems}
          categories={categoriesItems}
          blockTitle="Стихи и песни"
          blockSubtitle="Пиши, играй, пой, делай то, что тебе нравится и чувствуй вдохновение!"
        />
      )}
    </MainPageLayout>
  );
}

export async function getStaticProps() {
  const { data } = await apolloClient.query({
    query: gql`
      query IndexPageQuery {
        featured: posts(where: { featured: true }, limit: 1) {
          ...PostFields
        }
        posts(limit: 3) {
          category
          image_url
          slug
          published
          id
          excerpt
          createdAt
          updatedAt
          title
          featured
        }
      }

      fragment PostFields on Post {
        category
        image_url
        slug
        published
        id
        excerpt
        createdAt
        updatedAt
        title
        featured
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
}

// export const query = graphql`
//   query IndexPageQuery {
//     featured: allStrapiPosts(filter: { featured: { eq: true } }, limit: 1) {
//       edges {
//         node {
//           ...PostFields
//         }
//       }
//     }
//
//     poetry: allStrapiPosts(
//       filter: { category: { eq: "poetry" }, featured: { eq: false } }
//       sort: { fields: [createdAt], order: [DESC] }
//       limit: 3
//     ) {
//       edges {
//         node {
//           ...PostFields
//         }
//       }
//     }
//     blog: allStrapiPosts(
//       filter: { category: { eq: "blog" }, featured: { eq: false } }
//       sort: { fields: [createdAt], order: [DESC] }
//       limit: 3
//     ) {
//       edges {
//         node {
//           ...PostFields
//         }
//       }
//     }
//     categories: allStrapiCategories {
//       edges {
//         ...StrapiCategories
//       }
//     }
//   }
// `;
