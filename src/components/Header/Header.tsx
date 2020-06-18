import React from 'react';
import { Helmet } from 'react-helmet';

interface IHeader {
  articleAuthor?: string;
  headTitle?: string;
  fbAppId?: string;
  ogUrl?: string;
  ogImage?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  ogDescription?: string;
  ogLocale?: string;
  ogSiteName?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  author?: string;
  yandexVerification?: string;
  googleSiteVerification?: string;
}

const Header: React.FC<IHeader> = ({
  articleAuthor = 'Pavel Klochkov @ckomop0x',
  headTitle = 'Ckomop0x.me | Персональный блог, стихи и путешествия',
  fbAppId = '',
  ogUrl = 'https://ckomop0x.me',
  ogImage = 'https://ik.imagekit.io/ckomop0x/webtime-studio/pages/webtime-main-page-1_UHK17JzlZ.jpg',
  ogImageHeight = '280',
  ogImageWidth = '1080',
  ogDescription = 'Мы создаём проекты с индивидуальным подходом.',
  ogLocale = 'ru_RU',
  ogType = 'website',
  ogSiteName = 'Ckomop0x.me',
  twitterCard = 'Персональный блог, стихи и путешествия',
  twitterSite = '@ckomop0x',
  twitterCreator = '@ckomop0x',
  author = 'Pavel Klochkov @ckomop0x',
  yandexVerification = '',
  googleSiteVerification = '',
}) => {
  return (
    <Helmet
      bodyAttributes={{
        class: 'light',
      }}
      htmlAttributes={{
        class: 'light',
        lang: 'ru',
      }}
    >
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <meta name="author" content={author} />
      <meta name="yandex-verification" content={yandexVerification} />
      <meta name="google-site-verification" content={googleSiteVerification} />
      <meta name="description" content={headTitle} />

      {/* Facebook Open Graph */}
      <meta property="fb:app_id" content={fbAppId} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={headTitle} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:image:alt" content={headTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="article:author" content={articleAuthor} />

      {/* Twitter Open Graph */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={headTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={headTitle} />

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Pacifico|Roboto:400,500,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Neucha&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />
      {/* Icon and Social Icons */}
      <link
        rel="icon"
        sizes="192x192"
        href={require('../../../src/images/favicon.png')}
      />
      <link
        rel="apple-touch-icon"
        href={require('../../../src/images/favicon.png')}
      />
      <link rel="mask-icon" href={require('../../../src/images/favicon.png')} />
      <title>{headTitle}</title>
    </Helmet>
  );
};

export default Header;
