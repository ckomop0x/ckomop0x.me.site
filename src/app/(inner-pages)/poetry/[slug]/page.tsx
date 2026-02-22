import { Metadata } from 'next';

import DetailItemComponent from '@/components/DetailItem';
import InnerPageLayout from '@/components/layouts/InnerPageLayout';
import ContentMapper from '@/components/slices/content/ContentMapper';
import { Post, PostContentDynamicZone } from '@/queries/__generated__/graphql';
import { detailsPageQuery } from '@/queries/detailPageQuery.gql';
import { postsPathQuery } from '@/queries/postsPathQuery.gql';
import apolloClient from '@/utils/api/apollo-client';
import { getSEOMetadata } from '@/utils/seo/getSEOMetadata';

const CATEGORY = 'poetry';

export async function generateStaticParams() {
  const { data } = await apolloClient.query({
    query: postsPathQuery,
    variables: {
      category: CATEGORY,
      limit: 100,
      locale: 'uk-UA',
    },
  });

  // @ts-expect-error this should be fixed properly
  return data.posts.map((post: Post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { data } = await apolloClient.query({
    query: detailsPageQuery,
    variables: { category: CATEGORY, slug: params.slug, locale: 'uk-UA' },
  });

  // @ts-expect-error this should be fixed properly
  const post: Post = data.posts[0];
  const title = post?.title || 'Стихи';
  const description = title;
  const image = post?.PostImage?.url || '';
  const slug = post?.slug || '';

  return getSEOMetadata({
    title,
    description,
    url: `https://ckomop0x.me/${CATEGORY}/${slug}`,
    openGraph: {
      images: [
        {
          url: `${image}?tr=w-800,h-800,fo-top`,
          width: 800,
          height: 800,
          alt: title,
        },
      ],
    },
  });
}

export default async function PoetryPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { data } = await apolloClient.query({
    query: detailsPageQuery,
    variables: { category: CATEGORY, slug: params.slug, locale: 'uk-UA' },
  });

  // @ts-expect-error this should be fixed properly
  const post: Post = data.posts[0];
  if (!post?.Content) return <InnerPageLayout />;

  const { Content, PostImage, title, date } = post;

  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'Стихи', href: `/${CATEGORY}` },
    { label: title },
  ];

  return (
    <DetailItemComponent
      title={title}
      date={date}
      image={PostImage?.url ?? ''}
      postType={CATEGORY}
      breadcrumbs={breadcrumbs}
    >
      {Content.map(
        (ContentSlice: PostContentDynamicZone | null, index: number) =>
          ContentSlice ? (
            <ContentMapper key={index} Content={ContentSlice} />
          ) : null,
      )}
    </DetailItemComponent>
  );
}
