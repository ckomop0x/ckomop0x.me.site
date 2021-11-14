import InnerPageLayout from '../../components/shared/layouts/InnerPageLayout';
import getItemPath from '../../utils/queries/getItemPath';

import DetailItemComponent from 'components/shared/DetailItem';
import { detailsPageQuery } from 'queries/detailPageQuery.gql';
import { postsPathQuery } from 'queries/postsPathQuery.gql';
import {
  ICategory,
  IDetailPageProps,
  IGetStaticProps,
  IGetStaticPropsResponse,
  IGetStaticPathsResponse,
} from 'types';
import apolloClient from 'utils/api/apollo-client';

const CATEGORY: ICategory = 'poetry';

export default function DetailItem({
  detailedPost,
}: IDetailPageProps): JSX.Element {
  const { content, date, image_url, slug, title, updated_at } = detailedPost;
  const socialImage = `${image_url}?tr=w-1080,h-280,fo-top`;
  const ogUrl = `${CATEGORY}/${slug}`;
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
        updated_at={updated_at}
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
  const paths = [...data.posts.map(getItemPath)];

  return {
    paths,
    fallback: false,
  };
}
