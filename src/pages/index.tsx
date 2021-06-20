import { gql } from '@apollo/client';

import MainPageLayout from 'components/layouts/MainPageLayout';
import FeaturedPost from 'components/sections/FeaturedPost';
import Hero from 'components/sections/Hero';
// import PostsList from 'components/sections/PostsList';
import apolloClient from 'utils/api/apollo-client';

interface IIndexPage {
  // data: IndexPageQuery;
  blog: any;
  featured: any;
  poetry: any;
  categories: any;
}

export default function IndexPage({
  // blog,
  featured,
  // poetry,
  categories,
}: IIndexPage): JSX.Element {
  console.log('data', featured);

  const [featuredItem] = featured;
  // const poetryItems = poetry;
  // const blogItems = blog;

  return (
    <MainPageLayout>
      <Hero
        title="Добро пожаловать в мой персональный блог"
        subtitle="Здесь живут мои стихи, песни, путешествия, заметки и фотографий."
      />
      {featuredItem && (
        <FeaturedPost post={featuredItem} categories={categories} />
      )}
      {/* {blogItems?.length && (*/}
      {/*  <PostsList*/}
      {/*    items={blogItems}*/}
      {/*    categories={categoriesItems}*/}
      {/*    blockTitle="Статьи и публикации"*/}
      {/*    blockSubtitle="Каждый новый вкус, запах звук раскрывает нас всё больше и больше и больше! Только так ты сможешь лучше узнать мир и себя. Будь смелее в своих желаниях."*/}
      {/*  />*/}
      {/* )}*/}

      {/* {poetryItems?.length > 0 && (*/}
      {/*  <PostsList*/}
      {/*    items={poetryItems}*/}
      {/*    categories={categoriesItems}*/}
      {/*    blockTitle="Стихи и песни"*/}
      {/*    blockSubtitle="Пиши, играй, пой, делай то, что тебе нравится и чувствуй вдохновение!"*/}
      {/*  />*/}
      {/* )}*/}
    </MainPageLayout>
  );
}

export async function getStaticProps() {
  const { data } = await apolloClient.query({
    query: gql`
      query IndexPageQuery {
        featured: posts(where: { featured: true, published: true }, limit: 1) {
          ...PostFields
        }
        blog: posts(where: { category: "blog", published: true }, limit: 3) {
          ...PostFields
        }
        poetry: posts(
          where: { category: "poetry", published: true }
          limit: 3
        ) {
          ...PostFields
        }
        categories {
          ...CategoryFields
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

      fragment CategoryFields on Category {
        id
        name
        slug
      }
    `,
  });

  return {
    props: {
      featured: data.featured,
      blog: data.blog,
      poetry: data.poetry,
      categories: data.categories,
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
