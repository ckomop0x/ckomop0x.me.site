import { FC, PropsWithChildren } from 'react';

import Footer from '@/components/ui/Footer';
import SEO from '@/components/ui/SEO';
import { SEOProps } from '@/components/ui/SEO/SEO';

export interface BaseLayoutProps extends SEOProps {
  className?: string;
}

const BaseLayout: FC<PropsWithChildren<BaseLayoutProps>> = ({
  /* Primary meta settings */
  author,
  articleAuthor,
  headTitle,

  /* Facebook Open Graph */
  fbAppId,
  ogImage,
  ogType,
  ogTitle,
  ogUrl,
  ogImageWidth,
  ogImageHeight,
  ogDescription,
  ogLocale,
  ogSiteName,

  /* Twitter Open Graph */
  twitterCard,
  twitterSite,
  twitterCreator,
  twitterTitle,

  /* Layout specific */
  children,
}) => (
  <BaseLayoutWrapper>
    <SEO
      /* Primary meta settings */
      author={author}
      articleAuthor={articleAuthor}
      headTitle={headTitle || 'Павел Клочков | Персональный сайт'}
      /* Facebook Open Graph */
      fbAppId={fbAppId}
      ogImage={ogImage}
      ogType={ogType}
      ogTitle={ogTitle}
      ogUrl={ogUrl}
      ogImageWidth={ogImageWidth}
      ogImageHeight={ogImageHeight}
      ogDescription={ogDescription}
      ogLocale={ogLocale}
      ogSiteName={ogSiteName}
      /* Twitter Open Graph */
      twitterCard={twitterCard}
      twitterSite={twitterSite}
      twitterCreator={twitterCreator}
      twitterTitle={twitterTitle}
    />
    {children}
    <Footer projectTitle="Павел Клочков" />
  </BaseLayoutWrapper>
);

export const BaseLayoutWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className="min-h-screen">{children}</div>
);

export default BaseLayout;
