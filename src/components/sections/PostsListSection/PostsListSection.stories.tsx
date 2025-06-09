import type { Meta, StoryObj } from '@storybook/nextjs';

import PostsListSection from './PostsListSection';

const meta = {
  component: PostsListSection,
} satisfies Meta<typeof PostsListSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    blockTitle: 'blockTitle',
    blockSubtitle: 'blockSubtitle',
    posts: [],
    categoryInfo: {
      title: 'Category Title',
      slug: '/category-slug',
    },
  },
};
