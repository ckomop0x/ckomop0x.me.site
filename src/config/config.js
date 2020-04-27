// Endpoints
const API_ENDPOINT = 'https://api.webtime-studio.ru/graphql';
const IMAGES_ENDPOINT = 'https://res.cloudinary.com/ckomop0x/image/upload';

// Images transformations
const SMALL_PREVIEW_IMAGE = 'c_scale,f_auto,q_59,w_500';
const POST_VIEW_IMAGE = 'c_scale,f_auto,q_80,w_1920';
const W1920_IMAGE = 'c_scale,f_auto,q_80,w_1920';
const W1200_IMAGE = 'c_scale,f_auto,q_70,w_1200';
const W960_IMAGE = 'c_scale,f_auto,q_70,w_960';
const W800_IMAGE = 'c_scale,f_auto,q_70,w_800';
const W480_IMAGE = 'c_scale,f_auto,q_70,w_480';
const W320_IMAGE = 'c_scale,f_auto,q_60,w_320';

// Site
const SITE_HEAD = 'Ckomop0x.me';

module.exports = {
  API_ENDPOINT,
  SITE_HEAD,
  IMAGES_ENDPOINT,
  SMALL_PREVIEW_IMAGE,
  POST_VIEW_IMAGE,
  W1920_IMAGE,
  W1200_IMAGE,
  W960_IMAGE,
  W800_IMAGE,
  W480_IMAGE,
  W320_IMAGE
}
