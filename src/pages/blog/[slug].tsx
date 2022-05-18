import DetailItemComponent from 'components/UI/DetailItem';
import InnerPageLayout from 'components/layouts/InnerPageLayout';
import { detailsPageQuery } from 'queries/detailPageQuery.gql';
import { postsPathQuery } from 'queries/postsPathQuery.gql';
import {
  ICategory,
  DetailPageType,
  IGetStaticPathsResponse,
  IGetStaticProps,
  IGetStaticPropsResponse,
} from 'types';
import apolloClient from 'utils/api/apollo-client';
import getItemPath, { IItemPath } from 'utils/queries/getItemPath';

const CATEGORY: ICategory = 'blog';

interface BlogPostPageProps {
  post: DetailPageType;
}

export default function BlogPostPage({ post }: BlogPostPageProps): JSX.Element {
  if (!post?.attributes) {
    return (
      <InnerPageLayout
        headTitle={'Пост не найден'}
        ogUrl={''}
        ogImage={''}
        ogDescription={''}
        twitterCard={''}
      ></InnerPageLayout>
    );
  }

  const { Content, PostImage, slug, title, date } = post?.attributes;
  const socialImage = `${PostImage?.url}?tr=w-1080,h-280,fo-top`;
  const ogUrl = `https://ckomop0x.me/${CATEGORY}/${slug}/`;
  const description = (Content?.[0]?.description as string) || '';

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
        description={description}
        image={PostImage.url}
      />
    </InnerPageLayout>
  );
}

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
