import Head from 'next/head';

import siteConfig from '../../../config/site-config';

export interface ISEOProps {
  /* Primary meta settings */
  author?: string;
  articleAuthor?: string;
  headTitle?: string | null;

  /* Google and yandex metrika */
  yandexVerification?: string;
  googleSiteVerification?: string;

  /* Facebook Open Graph */
  fbAppId?: string;
  ogImage?: string;
  ogType?: string;
  ogTitle?: string;
  ogUrl?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  ogDescription?: string | null;
  ogLocale?: string;
  ogSiteName?: string;

  /* Twitter Open Graph */
  twitterCard?: string | null;
  twitterSite?: string;
  twitterCreator?: string;
  twitterTitle?: string;
}

export default function SEO({
  /* Primary meta settings */
  author,
  articleAuthor,
  headTitle,

  /* Google and yandex metrika */
  yandexVerification,
  googleSiteVerification,

  /* Facebook Open Graph */
  fbAppId,
  ogImage,
  ogTitle,
  ogType,
  ogUrl,
  ogDescription,

  /* Twitter Open Graph */
  twitterCard,
  twitterCreator,
  twitterTitle,
}: ISEOProps) {
  /* Primary meta settings */
  const metaAuthor = author ?? siteConfig.author;
  const metaArticleAuthor =
    articleAuthor || metaAuthor || siteConfig.articleAuthor;
  const metaDescription = headTitle ?? siteConfig.headTitle;

  /* Google and yandex metrika */
  const metaYandexVerification =
    yandexVerification ?? siteConfig.yandexVerification;
  const metaGoogleSiteVerification =
    googleSiteVerification ?? siteConfig.googleSiteVerification;

  /* Facebook Open Graph */
  const metaFbAppId = fbAppId ?? siteConfig.fbAppId;
  const metaOgImage = ogImage ?? siteConfig.ogImage;
  const metaOgUrl = ogUrl ?? siteConfig.ogUrl;
  const metaOgType = ogType ?? siteConfig.ogType;
  const metaOgTitle = ogTitle ?? metaDescription;
  const metaOgDescription = ogDescription ?? metaDescription;
  const metaTwitterCard = twitterCard ?? 'summary_large_image';
  const metaTwitterCreator = twitterCreator ?? siteConfig.twitterCreator;
  const metaTwitterTitle = twitterTitle ?? metaOgTitle;

  return (
    <Head>
      {/* Base HTML settings */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />

      {/* Primary meta settings */}
      {metaAuthor && <meta name="author" content={metaAuthor} />}
      {metaDescription && <meta name="description" content={metaDescription} />}

      {/* Google and yandex metrika */}
      {metaYandexVerification && (
        <meta name="yandex-verification" content={metaYandexVerification} />
      )}
      {metaGoogleSiteVerification && (
        <meta
          name="google-site-verification"
          content={metaGoogleSiteVerification}
        />
      )}

      {/* Facebook Open Graph */}
      {metaArticleAuthor && (
        <meta property="article:author" content={metaArticleAuthor} />
      )}
      {metaFbAppId && <meta property="fb:app_id" content={metaFbAppId} />}
      {metaOgImage && <meta property="og:image" content={metaOgImage} />}
      {metaOgUrl && <meta property="og:url" content={metaOgUrl} />}
      {metaOgType && <meta property="og:type" content={metaOgType} />}
      {metaOgTitle && <meta property="og:title" content={metaOgTitle} />}
      {metaOgDescription && (
        <meta property="og:description" content={metaOgDescription} />
      )}

      {/* Twitter Open Graph */}
      {metaTwitterCard && (
        <meta name="twitter:card" content={metaTwitterCard} />
      )}
      {metaTwitterCreator && (
        <meta name="twitter:creator" content={metaTwitterCreator} />
      )}

      {metaTwitterTitle && (
        <meta name="twitter:title" content={metaTwitterTitle} />
      )}
      <meta name="twitter:description" content={ogDescription ?? ''} />
      <meta name="twitter:image" content={ogImage} />

      <title>{metaDescription}</title>
    </Head>
  );
}
