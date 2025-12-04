import { Metadata } from 'next';

import DetailItemComponent from '@/components/DetailItem';
import ContentMapper from '@/components/slices/content/ContentMapper';
import { Post, PostContentDynamicZone } from '@/queries/__generated__/graphql';
import { detailsPageQuery } from '@/queries/detailPageQuery.gql';
import { postsPathQuery } from '@/queries/postsPathQuery.gql';
import apolloClient from '@/utils/api/apollo-client';
import { getSEOMetadata } from '@/utils/seo/getSEOMetadata';

const CATEGORY = 'blog';

export async function generateStaticParams() {
  const { data } = await apolloClient.query({
    query: postsPathQuery,
    variables: {
      category: CATEGORY,
      limit: 100,
      locale: 'ru',
    },
  });

  // @ts-expect-error
  return data.posts.map((post: Post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { data } = await apolloClient.query({
    query: detailsPageQuery,
    variables: { category: CATEGORY, slug: params.slug },
  });

  // @ts-expect-error
  const post: Post = data.posts[0];
  const title = post?.title || 'Блог';
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

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { data } = await apolloClient.query({
    query: detailsPageQuery,
    variables: { category: CATEGORY, slug: params.slug },
  });

  // @ts-expect-error
  const post: Post = data.posts[0];
  if (!post?.Content) return 'No content available';

  const { Content, PostImage, title, date } = post;

  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'Блог', href: `/${CATEGORY}` },
    { label: title },
  ];

  return (
    <DetailItemComponent
      title={title}
      date={date}
      breadcrumbs={breadcrumbs}
      image={PostImage?.url ?? ''}
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
