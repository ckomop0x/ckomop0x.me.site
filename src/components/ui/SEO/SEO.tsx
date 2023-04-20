import Head from 'next/head';
import { FC } from 'react';

import siteConfig from '../../../config/site-config';

import FacebookMeta from 'components/ui/SEO/FacebookMeta';
import TwitterMeta from 'components/ui/SEO/TwitterMeta';

export interface SEOProps {
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

const SEO: FC<SEOProps> = ({
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
}): JSX.Element => {
  /* Primary meta settings */
  const metaAuthor = author ?? siteConfig.author;
  const metaArticleAuthor =
    articleAuthor || metaAuthor || siteConfig.articleAuthor;
  const metaDescription = `${siteConfig.projectTitle} | ${
    headTitle ?? siteConfig.headTitle
  }`;

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

      {/* Twitter Open Graph */}
      <TwitterMeta
        metaTwitterCard={metaTwitterCard}
        metaTwitterCreator={metaTwitterCreator}
        metaTwitterTitle={metaTwitterTitle}
        metaOgDescription={metaOgDescription}
        metaOgImage={metaOgImage}
      />

      {/* Facebook Open Graph */}
      <FacebookMeta
        metaArticleAuthor={metaArticleAuthor}
        metaFbAppId={metaFbAppId}
        metaOgImage={metaOgImage}
        metaOgUrl={metaOgUrl}
        metaOgType={metaOgType}
        metaOgTitle={metaOgTitle}
        metaOgDescription={metaOgDescription}
      />

      <title>{metaDescription}</title>
    </Head>
  );
};

export default SEO;
