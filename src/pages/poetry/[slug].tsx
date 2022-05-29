import { FC } from 'react';

import DetailItemComponent from 'components/UI/DetailItem';
import InnerPageLayout from 'components/layouts/InnerPageLayout';
import ContentMapper from 'components/slices/content/ContentMapper';
import { detailsPageQuery } from 'queries/detailPageQuery.gql';
import { postsPathQuery } from 'queries/postsPathQuery.gql';
import {
  CategoryInterface,
  DetailPageType,
  IGetStaticPathsResponse,
  IGetStaticProps,
  IGetStaticPropsResponse,
} from 'types';
import apolloClient from 'utils/api/apollo-client';
import getItemPath, { IItemPath } from 'utils/queries/getItemPath';

const CATEGORY: CategoryInterface = 'poetry';

interface PoetryPostPageProps {
  post: DetailPageType;
}

const PoetryPostPage: FC<PoetryPostPageProps> = ({ post }): JSX.Element => {
  if (!post?.attributes) {
    return (
      <InnerPageLayout
        headTitle="Пост не найден"
        ogUrl=""
        ogImage=""
        ogDescription=""
        twitterCard=""
      />
    );
  }

  const { Content, PostImage, slug, title, date } = post?.attributes;
  const socialImage = `${PostImage?.url}?tr=w-1080,h-280,fo-top`;
  const ogUrl = `https://ckomop0x.me/${CATEGORY}/${slug}/`;

  return (
    <InnerPageLayout
      headTitle={title}
      ogUrl={ogUrl}
      ogImage={socialImage}
      ogDescription={title}
      twitterCard={title}
    >
      <DetailItemComponent
        title={title}
        date={date}
        image={PostImage?.url ?? ''}
      >
        {Content
          ? Content?.map(
              (ContentSlice, index) =>
                ContentSlice && (
                  <ContentMapper key={index} Content={ContentSlice} />
                ),
            )
          : 'Почему-то здесь пусто.'}
      </DetailItemComponent>
    </InnerPageLayout>
  );
};

export default PoetryPostPage;

export async function getStaticProps({
  params,
}: IGetStaticProps): Promise<IGetStaticPropsResponse> {
  const { data } = await apolloClient.query({
    query: detailsPageQuery,
    variables: { category: CATEGORY, slug: params.slug },
  });
  const [post] = data.posts.data;

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths(): Promise<IGetStaticPathsResponse> {
  const { data } = await apolloClient.query({
    query: postsPathQuery,
    variables: {
      category: CATEGORY,
      limit: 100,
      locale: 'ru',
    },
  });
  const paths: IItemPath[] | string[] = [...data.posts.data.map(getItemPath)];

  return {
    paths,
    fallback: false,
  };
}
