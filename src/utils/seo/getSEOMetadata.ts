import { Metadata } from 'next';

interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface SEOOptions {
  // author?: string;
  // articleAuthor?: string;
  // headTitle?: string | null;
  // googleSiteVerification?: string;
  // fbAppId?: string;
  // ogImage?: string;
  // ogType?: string;
  // ogTitle?: string;
  // ogUrl?: string;
  // ogDescription?: string | null;
  // twitterCard?: string | null;
  // twitterSite?: string;
  // twitterCreator?: string;
  // twitterTitle?: string;
  author?: string;
  description: string;
  title: string;

  siteName?: string;
  url?: string;

  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    images?: OpenGraphImage[];
  };
}

export const getSEOMetadata = (options: SEOOptions): Metadata => {
  const {
    author = 'Павел Клочков',
    description,
    siteName = 'ckomop0x.me. Личный сайт Павла Клочкова',
    title,
    url = process.env.NEXT_PUBLIC_SITE_URL || 'https://ckomop0x.me',

    openGraph,
  } = options;

  return {
    title,
    description,
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName,
      images: [
        {
          url: 'https://example.com/og.png',
        },
      ],
      ...openGraph,
    },
  };
};
