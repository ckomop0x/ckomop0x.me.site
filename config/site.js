module.exports = {
  siteTitle: 'Павел Клочков || Ckomop0x.me', // Navigation and Site Title
  siteTitleAlt: 'Сайт о жизни и творчестве Павла Клочкова', // Alternative Site title for SEO
  siteTitleShort: 'Ckomop0x.me', // short_name for manifest
  siteUrl: process.env.ROOT_URL || 'https://Ckomop0x.me', // Domain of your site. No trailing slash!
  lang: 'ru', // Language Tag on <html> element
  pathPrefix: '/',
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'Привет, здесь живут стихи, песни, путешествия, заметки и фотографии Павла Клочкова.',
  minibio: `
    <strong>Павел Клочков</strong> поэт, музыкант, путешественник и  разработчик.
  `,
  author: 'Павел Клочков', // Author for schemaORGJSONLD
  organization: 'Павел Клочков || Ckomop0x.me',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@ckomop0x', // Twitter Username
  ogSiteName: 'Павел Клочков || Ckomop0x.me', // Facebook Site Name
  ogLanguage: 'ru_RU',

  // Manifest and Progress color
  themeColor: '#4147DC',
  backgroundColor: '#231C42',

  // Social component
  twitter: 'https://twitter.com/ckomop0x/',
  twitterHandle: '@ckomop0x',
  github: 'https://github.com/ckomop0x/',
  linkedin: 'https://www.linkedin.com/in/ckomop0x/',
  youtube: 'https://www.youtube.com/channel/UC6OVIuGvKVmFMAog9Q0kejw',
};
