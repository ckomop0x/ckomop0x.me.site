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
  ogImage: process.env.NEXT_PUBLIC_OG_IMAGE ?? '',
  ogType: process.env.NEXT_PUBLIC_OG_TYPE ?? '',
  ogUrl: process.env.NEXT_PUBLIC_OG_URL ?? '',
  fbAppId: process.env.NEXT_PUBLIC_FB_APP_ID ?? '',
};

interface IGetSiteConfigProps {
  author: string;
  articleAuthor: string;
  projectHeadTitle: string;
  projectTitle: string;
  ogImage: string;
  ogType: string;
  ogUrl: string;
  fbAppId: string;
  yandexVerification: string;
  googleSiteVerification: string;
}

function getSiteConfig({
  articleAuthor,
  author,
  fbAppId,
  googleSiteVerification,
  ogImage,
  ogType,
  ogUrl,
  projectHeadTitle,
  projectTitle,
  yandexVerification,
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
  };
}

const siteConfig = getSiteConfig(baseSettings);
export default siteConfig;
