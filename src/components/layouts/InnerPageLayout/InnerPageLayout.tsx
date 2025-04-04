import { FC, PropsWithChildren } from 'react';

import BaseLayout, { BaseLayoutProps } from '../BaseLayout/BaseLayout';

import Nav from '@/components/ui/Nav';

export type InnerPageLayoutProps = BaseLayoutProps;

const InnerPageLayout: FC<PropsWithChildren<InnerPageLayoutProps>> = ({
  /* Primary meta settings */
  author,
  articleAuthor,
  headTitle,

  /* Facebook Open Graph */
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

  children,
}) => (
  <BaseLayout
    /* Primary meta settings */
    author={author}
    articleAuthor={articleAuthor}
    headTitle={headTitle}
    /* Facebook Open Graph */
    ogImage={ogImage}
    ogUrl={`https://ckomop0x.me/${ogUrl}`}
    ogDescription={ogDescription}
    ogImageHeight={ogImageHeight}
    ogImageWidth={ogImageWidth}
    ogLocale={ogLocale}
    ogType={ogType}
    /* Twitter Open Graph */
    twitterCard={twitterCard}
    twitterTitle={twitterTitle}
  >
    <Nav isInner={true} />
    <InnerPageLayoutWrapper>{children}</InnerPageLayoutWrapper>
  </BaseLayout>
);

export const InnerPageLayoutWrapper: FC<PropsWithChildren> = ({ children }) => (
  <main className="text-[#a5a5a5]">{children}</main>
);

export default InnerPageLayout;
