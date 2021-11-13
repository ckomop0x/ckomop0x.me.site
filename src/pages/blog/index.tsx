import InnerPageLayout from '../../components/shared/layouts/InnerPageLayout';

import ItemsList from 'components/shared/ItemsList';
import { categoryPageQuery } from 'queries/categoryPageQuery.gql';
import { TitleBlock, SubtitleBlock } from 'styles/Typography';
import { ICategory, ICategoryPageProps } from 'types';
import apolloClient from 'utils/api/apollo-client';

const CATEGORY: ICategory = 'blog';

export default function BlogPage({
  items,
  categories,
}: ICategoryPageProps): JSX.Element {
  return (
    <InnerPageLayout
      headTitle="Статьи и публикации"
      ogUrl={CATEGORY}
      ogDescription="Статьи и публикации"
      twitterCard="Статьи и публикации"
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
    </InnerPageLayout>
  );
}

export async function getStaticProps(): Promise<any> {
  const { data } = await apolloClient.query({
    query: categoryPageQuery,
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
