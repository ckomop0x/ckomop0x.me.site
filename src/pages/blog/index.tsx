import ItemsList from 'components/shared/ItemsList';
import InnerPageLayout from 'components/shared/layouts/InnerPageLayout';
import { categoryPageQuery } from 'queries/categoryPageQuery.gql';
import {
  CategoryPageQuery_categories,
  CategoryPageQuery_posts,
} from 'queries/types/CategoryPageQuery';
import { TitleBlock, SubtitleBlock } from 'styles/Typography';
import { ICategory, ICategoryPageProps } from 'types';
import apolloClient from 'utils/api/apollo-client';

const CATEGORY: ICategory = 'blog';
const TITLE = 'Статьи и публикации';
const SUB_TITLE = 'Статьи и публикации на разные темы.';

export default function BlogPage({
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
          'Здесь ещё ничего нет или что-то пошло не так. 😎'
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
