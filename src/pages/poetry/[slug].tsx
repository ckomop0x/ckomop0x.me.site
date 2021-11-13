import ProjectsLayout from 'components/layouts/PoetryLayout';
import DetailItemComponent from 'components/shared/DetailItem';
import { detailsPageQuery } from 'queries/detailPageQuery.gql';
import { postsPathQuery } from 'queries/postsPathQuery.gql';
import { IDetailPageProps } from 'types/detailPageProps';
import apolloClient from 'utils/api/apollo-client';

const CATEGORY = 'poetry';

export default function DetailItem({
  detailedPost,
}: IDetailPageProps): JSX.Element {
  const { content, date, image_url, slug, title, updated_at } = detailedPost;
  const socialImage = `${image_url}?tr=w-1080,h-280,fo-top`;
  const ogUrl = `https://ckomop0x.me/${CATEGORY}/${slug}/`;

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
        description={(content?.[0]?.rich_text as string) || ''}
        image={image_url}
      />
    </ProjectsLayout>
  );
}

export async function getStaticProps({ params }: any): Promise<any> {
  const { data } = await apolloClient.query({
    query: detailsPageQuery,
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
    query: postsPathQuery,
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
