import DetailItemComponent from 'components/UI/DetailItem';
import InnerPageLayout from 'components/layouts/InnerPageLayout';
import { detailsPageQuery } from 'queries/detailPageQuery.gql';
import { postsPathQuery } from 'queries/postsPathQuery.gql';
import {
  ICategory,
  IDetailPageProps,
  IGetStaticPathsResponse,
  IGetStaticProps,
  IGetStaticPropsResponse,
} from 'types';
import apolloClient from 'utils/api/apollo-client';
import getItemPath, { IItemPath } from 'utils/queries/getItemPath';

const CATEGORY: ICategory = 'blog';

export default function BlogPostPage({
  detailedPost,
}: IDetailPageProps): JSX.Element {
  const { content, image_url, slug, title, date } = detailedPost;
  const socialImage = `${image_url}?tr=w-1080,h-280,fo-top`;
  const ogUrl = `https://ckomop0x.me/${CATEGORY}/${slug}/`;
  const description = (content?.[0]?.rich_text as string) || '';

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
        image={image_url}
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
  const [detailedPost] = data.posts;

  return {
    props: {
      detailedPost,
    },
  };
}

export async function getStaticPaths(): Promise<IGetStaticPathsResponse> {
  const { data } = await apolloClient.query({
    query: postsPathQuery,
    variables: {
      category: CATEGORY,
    },
  });
  const paths: IItemPath[] | string[] = [...data.posts.map(getItemPath)];

  return {
    paths,
    fallback: false,
  };
}
