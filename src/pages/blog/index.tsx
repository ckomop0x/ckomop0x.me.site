import { CATEGORY_PAGE_QUERY } from '../../queries/categoryPageQuery.gql';
import { ICategoryPageProps } from '../../types/categoryPage';

import CategoryLayout from 'components/layouts/PoetryLayout/PoetryLayout';
import ItemsList from 'components/shared/ItemsList';
import { TitleBlock, SubtitleBlock } from 'styles/Typography';
import apolloClient from 'utils/api/apollo-client';

export default function PoetryPage({
  items,
  categories,
}: ICategoryPageProps): JSX.Element {
  return (
    <CategoryLayout
      headTitle="Ckomop0x.me | Статьи и публикации"
      ogUrl="https://ckomop0x.me/poetry/"
      ogDescription="Ckomop0x.me | Статьи и публикации"
      twitterCard="Ckomop0x.me | Статьи и публикации"
    >
      <div className="container">
        <TitleBlock>Блог</TitleBlock>
        <SubtitleBlock>Статьи и публикации на разные темы.</SubtitleBlock>
        {items ? (
          <ItemsList items={items} categories={categories} />
        ) : (
          'Здесь ещё ничего нет или что-то пошло не так. 😎'
        )}
      </div>
    </CategoryLayout>
  );
}

export async function getStaticProps(): Promise<any> {
  const { data } = await apolloClient.query({
    query: CATEGORY_PAGE_QUERY,
    variables: {
      category: 'blog',
      limit: 100,
    },
  });

  return {
    props: {
      items: data.posts,
      categories: data.categories,
    },
  };
}
