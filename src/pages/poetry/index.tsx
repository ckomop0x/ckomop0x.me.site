import { ICategory } from '../../types';

import CategoryLayout from 'components/layouts/CategoryLayout';
import ItemsList from 'components/shared/ItemsList';
import { categoryPageQuery } from 'queries/categoryPageQuery.gql';
import { TitleBlock, SubtitleBlock } from 'styles/Typography';
import { ICategoryPageProps } from 'types';
import apolloClient from 'utils/api/apollo-client';

const CATEGORY: ICategory = 'poetry';
const TITLE = 'Стихи и песни';
const SUB_TITLE =
  'Стихи и песни написанные в разное время, в разных городах и странах';

export default function PoetryPage({
  items,
  categories,
}: ICategoryPageProps): JSX.Element {
  return (
    <CategoryLayout
      headTitle={TITLE}
      ogUrl={CATEGORY}
      ogDescription={TITLE}
      twitterCard={SUB_TITLE}
    >
      <TitleBlock>{TITLE}</TitleBlock>
      <SubtitleBlock>{SUB_TITLE}</SubtitleBlock>
      {items ? (
        <ItemsList items={items} categories={categories} />
      ) : (
        'Здесь ещё ничего нет или что-то пошло не так. 😎'
      )}
    </CategoryLayout>
  );
}

export async function getStaticProps(): Promise<any> {
  const {
    data: { posts: items, categories },
  } = await apolloClient.query({
    query: categoryPageQuery,
    variables: {
      category: 'poetry',
      limit: 100,
    },
  });

  return {
    props: {
      items,
      categories,
    },
  };
}
