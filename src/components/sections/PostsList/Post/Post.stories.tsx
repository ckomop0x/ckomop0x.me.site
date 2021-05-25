import { Story, Meta } from '@storybook/react';
import React from 'react';

import Post, { IPostProps } from './Post';

export default {
  title: 'Components/Post',
  component: Post,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IPostProps> = args => <Post {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'main',
  publicationDate: 'Завтра',
  slug: 'Анонс',
  category: {
    name: 'Стихи',
    slug: 'poetry',
  },
  image:
    'https://ik.imagekit.io/ckomop0x/ckomop0x-me/blog/etot-god-slovno-marafon/IMG_2783_2_rCmdP-qXAWT2W.jpg?tr=w-480,h-480,fo-top',
};
