import { gql } from '@apollo/client';

import { DETAILS_PAGE_QUERY } from '../../queries/detailPageQuery';
import { POSTS_PATH_QUERY } from '../../queries/postsPathQuery';

import ProjectsLayout from 'components/layouts/PoetryLayout';
import DetailItemComponent from 'components/shared/DetailItem';
import apolloClient from 'utils/api/apollo-client';

export default function DetailItem({ data }: any): JSX.Element {
  const { content = [], createdAt, image_url, slug, title, updatedAt } = data;

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

export async function getStaticProps({ params }: any) {
  const { data } = await apolloClient.query({
    query: DETAILS_PAGE_QUERY,
    variables: { category: 'poetry', slug: params.slug },
  });

  return {
    props: {
      data: data.posts[0],
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: POSTS_PATH_QUERY,
    variables: {
      category: 'poetry',
    },
  });

  // console.log('getStaticPaths data', data);

  const paths = data.posts.map(slugData => `/poetry/${slugData.slug}`);
  console.log('getStaticPaths data', paths);

  return {
    paths,
    fallback: false,
  };
}
