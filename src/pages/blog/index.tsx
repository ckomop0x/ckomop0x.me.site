import styled from '@emotion/styled';
import { NextPage } from 'next';

import ItemsList from 'components/UI/ItemsList';
import InnerPageLayout from 'components/layouts/InnerPageLayout';
import { categoryPageQuery } from 'queries/categoryPageQuery.gql';
import { TitleBlock, SubtitleBlock } from 'styles/Typography';
import { ICategory, CategoryPageProps } from 'types';
import apolloClient from 'utils/api/apollo-client';

const CATEGORY: ICategory = 'blog';
const LIMIT = 100;
const TITLE = 'Статьи и публикации';
const SUB_TITLE = 'Статьи и публикации на разные темы.';
const EMPTY_PAGE_MESSAGE = 'Здесь ещё ничего нет или что-то пошло не так. 😎';

const BlogPage: NextPage<CategoryPageProps> = ({
  items,
  categories,
}): JSX.Element => (
  <InnerPageLayout
    headTitle={TITLE}
    ogUrl={CATEGORY}
    ogDescription={TITLE}
    twitterCard={SUB_TITLE}
  >
    <BlogPageWrapper>
      <div className="container">
        <TitleBlock>{TITLE}</TitleBlock>
        <SubtitleBlock>{SUB_TITLE}</SubtitleBlock>
        {items ? (
          <ItemsList items={items} categories={categories} />
        ) : (
          EMPTY_PAGE_MESSAGE
        )}
      </div>
    </BlogPageWrapper>
  </InnerPageLayout>
);

export async function getStaticProps(): Promise<{
  props: CategoryPageProps;
}> {
  const {
    data: { posts: items, categories },
  } = await apolloClient.query({
    query: categoryPageQuery,
    variables: {
      category: CATEGORY,
      limit: LIMIT,
    },
  });

  return {
    props: {
      items,
      categories,
    },
  };
}

export const BlogPageWrapper = styled.div`
  padding: 40px 0;
  min-height: calc(100vh - 130px);
`;

export default BlogPage;
