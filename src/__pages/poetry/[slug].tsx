import { NextPage } from 'next';

import DetailItemComponent from '@/components/DetailItem';
import InnerPageLayout from '@/components/layouts/InnerPageLayout';
import ContentMapper from '@/components/slices/content/ContentMapper';
import { detailsPageQuery } from '@/queries/detailPageQuery.gql';
import { postsPathQuery } from '@/queries/postsPathQuery.gql';
import { Post } from '@/queries/types/graphql';
import {
  BreadcrumbItemType,
  CategoryInterface,
  IGetStaticPathsResponse,
  IGetStaticProps,
  IGetStaticPropsResponse,
} from 'types';
import apolloClient from 'utils/api/apollo-client';
import getItemPath, { IItemPath } from 'utils/queries/getItemPath';

const CATEGORY: CategoryInterface = 'poetry';

interface PoetryPostPageProps {
  post: Post;
}

const PoetryPostPage: NextPage<PoetryPostPageProps> = ({ post }) => {
  if (!post?.Content) {
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

  const { Content, PostImage, slug, title, date } = post;
  const socialImage = `${PostImage?.url}?tr=w-1080,h-280,fo-top`;
  const ogUrl = `https://ckomop0x.me/${CATEGORY}/${slug}/`;
  const breadcrumbs: BreadcrumbItemType[] = [
    {
      label: 'Главная',
      href: '/',
    },
    {
      label: 'Стихи',
      href: `/${CATEGORY}`,
    },
    {
      label: title,
    },
  ];

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
        postType="poetry"
        breadcrumbs={breadcrumbs}
      >
        {Content
          ? Content?.map(
              // TODO: Fix this type
              (ContentSlice: any, index: number) =>
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
  const [post] = data.posts;

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
  const paths: IItemPath[] | string[] = [...data.posts.map(getItemPath)];

  return {
    paths,
    fallback: false,
  };
}
