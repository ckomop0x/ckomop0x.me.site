export const baseSettings = {
  /* Primary meta settings */
  author: process.env.NEXT_PUBLIC_AUTHOR ?? '',
  articleAuthor: process.env.NEXT_PUBLIC_AUTHOR ?? '',
  projectTitle: process.env.NEXT_PUBLIC_PROJECT_TITLE ?? '',
  projectHeadTitle: process.env.NEXT_PUBLIC_PROJECT_HEAD_TITLE ?? '',

  /* Google and yandex metrika */
  yandexVerification: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION ?? '',
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? '',

  /* Facebook Open Graph */
  fbAppId: process.env.NEXT_PUBLIC_FB_APP_ID ?? '',
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE ?? '',
  ogType: process.env.NEXT_PUBLIC_OG_TYPE ?? '',
  ogUrl: process.env.NEXT_PUBLIC_OG_URL ?? '',

  /* Twitter Open Graph */
  twitterCreator: process.env.NEXT_PUBLIC_TWITTER_CREATOR ?? '',
};

interface IGetSiteConfigProps {
  /* Primary meta settings */
  author: string;
  articleAuthor: string;
  projectHeadTitle: string;
  projectTitle: string;

  /* Google and yandex metrika */
  yandexVerification: string;
  googleSiteVerification: string;

  /* Facebook Open Graph */
  fbAppId: string;
  ogImage: string;
  ogType: string;
  ogUrl: string;

  /* Twitter Open Graph */
  twitterCreator: string;
}

function getSiteConfig({
  /* Primary meta settings */
  author,
  articleAuthor,
  projectHeadTitle,
  projectTitle,

  /* Google and yandex metrika */
  googleSiteVerification,
  yandexVerification,

  /* Facebook Open Graph */
  fbAppId,
  ogImage,
  ogType,
  ogUrl,

  /* Twitter Open Graph */
  twitterCreator,
}: IGetSiteConfigProps) {
  const headTitle = `${projectTitle} | ${projectHeadTitle}`;

  return {
    /* Primary meta settings */
    author,
    articleAuthor,
    projectHeadTitle,
    projectTitle,
    headTitle,

    /* Google and yandex metrika */
    googleSiteVerification,
    yandexVerification,

    /* Facebook Open Graph */
    fbAppId,
    ogImage,
    ogType,
    ogUrl,

    /* Twitter Open Graph */
    twitterCreator,
  };
}

const siteConfig = getSiteConfig(baseSettings);
export default siteConfig;
