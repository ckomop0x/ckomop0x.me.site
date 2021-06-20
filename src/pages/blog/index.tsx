import PoetryLayout from 'components/layouts/PoetryLayout/PoetryLayout';
import ItemsList from 'components/shared/ItemsList';
import { TitleBlock, SubtitleBlock } from 'styles/Typography';

export interface IPortfolioProps {
  data: {
    blog: any;
    categories: any;
  };
}

export default function PoetryPage({ data }: IPortfolioProps): JSX.Element {
  const blogItems = data?.blog?.edges;
  const categoriesItems = data?.categories?.edges;

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
        {blogItems ? (
          <ItemsList items={blogItems} categories={categoriesItems} />
        ) : (
          'Здесь ещё ничего нет или что-то пошло не так. 😎'
        )}
      </div>
    </PoetryLayout>
  );
}

// export const query = graphql`
//   query blogPageQuery {
//     blog: allStrapiPosts(
//       filter: { category: { eq: "blog" } }
//       sort: { fields: [createdAt] }
//       limit: 100
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
