import { Meta } from '@storybook/nextjs';

import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post,
} as Meta;

export const Primary = {
  args: {
    id: 'main',
    publicationDate: '01 Ноября 2021',
    updateDate: '02 Ноября 2021',
    slug: 'Анонс',
    title: 'Стихотворение',
    category: {
      title: 'Стихи',
      slug: 'poetry',
    },
    image:
      'https://ik.imagekit.io/ckomop0x/ckomop0x-me/blog/etot-god-slovno-marafon/IMG_2783_2_rCmdP-qXAWT2W.jpg?tr=w-480,h-480,fo-top',
  },
};
