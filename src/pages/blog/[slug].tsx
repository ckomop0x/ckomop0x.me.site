import { GetStaticProps } from 'next';

import { PostsPathQuery_posts } from '../../queries/types/PostsPathQuery';
import getPostsPaths from '../../utils/api/getPostsPaths';

import ProjectsLayout from 'components/layouts/PoetryLayout';
import DetailItemComponent from 'components/shared/DetailItem';
import { detailsPageQuery } from 'queries/detailPageQuery.gql';
import { postsPathQuery } from 'queries/postsPathQuery.gql';
import { IDetailPageProps } from 'types/detailPageProps';
import apolloClient from 'utils/api/apollo-client';

const CATEGORY = 'blog';

export default function BlogPostPage({
  detailedPost,
}: IDetailPageProps): JSX.Element {
  const { content, image_url, slug, title, date, updated_at } = detailedPost;
  const socialImage = `${image_url}?tr=w-1080,h-280,fo-top`;
  const ogUrl = `https://ckomop0x.me/${CATEGORY}/${slug}/`;
  const description = (content?.[0]?.rich_text as string) || '';

  return (
    <ProjectsLayout
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
    </ProjectsLayout>
  );
}

interface IGetStaticProps {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: IGetStaticProps): Promise<{
  props: {
    detailedPost: IDetailPageProps;
  };
}> {
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

export async function getStaticPaths(): Promise<{
  paths: string[] | string;
  fallback: boolean;
}> {
  const { data } = await apolloClient.query({
    query: postsPathQuery,
    variables: {
      category: CATEGORY,
    },
  });
  const paths = getPostsPaths({ posts: data.posts, category: CATEGORY });

  return {
    paths,
    fallback: false,
  };
}
