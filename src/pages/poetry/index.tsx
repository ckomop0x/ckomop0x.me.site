import ItemsList from 'components/UI/ItemsList';
import InnerPageLayout from 'components/UI/layouts/InnerPageLayout';
import { categoryPageQuery } from 'queries/categoryPageQuery.gql';
import {
  CategoryPageQuery_categories,
  CategoryPageQuery_posts,
} from 'queries/types/CategoryPageQuery';
import { TitleBlock, SubtitleBlock } from 'styles/Typography';
import { ICategory, ICategoryPageProps } from 'types';
import apolloClient from 'utils/api/apollo-client';

const CATEGORY: ICategory = 'poetry';
const TITLE = 'Стихи и песни';
const SUB_TITLE =
  'Стихи и песни написанные в разное время, в разных городах и странах';
const EMPTY_PAGE_MESSAGE = 'Здесь ещё ничего нет или что-то пошло не так. 😎';

export default function PoetryPage({
  items,
  categories,
}: ICategoryPageProps): JSX.Element {
  return (
    <InnerPageLayout
      headTitle={TITLE}
      ogUrl={CATEGORY}
      ogDescription={TITLE}
      twitterCard={SUB_TITLE}
    >
      <div className="container">
        <TitleBlock>{TITLE}</TitleBlock>
        <SubtitleBlock>{SUB_TITLE}</SubtitleBlock>
        {items ? (
          <ItemsList items={items} categories={categories} />
        ) : (
          EMPTY_PAGE_MESSAGE
        )}
      </div>
    </InnerPageLayout>
  );
}

export async function getStaticProps(): Promise<{
  props: {
    items: CategoryPageQuery_posts;
    categories: CategoryPageQuery_categories;
  };
}> {
  const {
    data: { posts: items, categories },
  } = await apolloClient.query({
    query: categoryPageQuery,
    variables: {
      category: CATEGORY,
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
