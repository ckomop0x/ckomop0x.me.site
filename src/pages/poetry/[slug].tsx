import { DETAILS_PAGE_QUERY } from '../../queries/detailPageQuery.gql';
import { POSTS_PATH_QUERY } from '../../queries/postsPathQuery.gql';
import { IDetailPageProps } from '../../types/detailPageProps';

import ProjectsLayout from 'components/layouts/PoetryLayout';
import DetailItemComponent from 'components/shared/DetailItem';
import apolloClient from 'utils/api/apollo-client';

export default function DetailItem({
  detailedPost,
}: IDetailPageProps): JSX.Element {
  const { content, createdAt, image_url, slug, title, updatedAt } =
    detailedPost;
  const socialImage = `${image_url}?tr=w-1080,h-280,fo-top`;
  return (
    <ProjectsLayout
      headTitle={title}
      ogUrl={`https://ckomop0x.me/poetry/${slug}/`}
      ogImage={socialImage}
      ogDescription={title}
      twitterCard={title}
    >
      <DetailItemComponent
        title={title}
        createdAt={createdAt}
        updatedAt={updatedAt}
        description={(content?.[0]?.rich_text as string) || ''}
        image={image_url}
      />
    </ProjectsLayout>
  );
}

export async function getStaticProps({ params }: any): Promise<any> {
  const { data } = await apolloClient.query({
    query: DETAILS_PAGE_QUERY,
    variables: { category: 'poetry', slug: params.slug },
  });
  const [detailedPost] = data.posts;

  return {
    props: {
      detailedPost,
    },
  };
}

export async function getStaticPaths(): Promise<any> {
  const { data } = await apolloClient.query({
    query: POSTS_PATH_QUERY,
    variables: {
      category: 'poetry',
    },
  });
  const paths = data.posts.map((slugData: any) => `/poetry/${slugData.slug}`);

  return {
    paths,
    fallback: false,
  };
}
