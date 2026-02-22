import type { Meta, StoryObj } from '@storybook/nextjs';

import { Post } from '@/types';

import PostsListSection from './PostsListSection';

const mockPost: Post = {
  documentId: '1',
  title: 'Як я навчився любити TypeScript',
  slug: 'yak-ya-navchyvsia-liubyty-typescript',
  date: '2024-03-15T00:00:00.000Z',
  excerpt: 'Коротка історія про мій шлях від JavaScript до TypeScript і чому я більше не хочу повертатись.',
  localizations: [],
  category: { __typename: 'Category', documentId: 'cat-1', title: 'Блог', slug: 'blog', localizations: [] },
  coverImage: null,
  PostImage: {
    __typename: 'ComponentContentImage',
    id: 'img-1',
    title: 'TypeScript',
    url: 'https://ik.imagekit.io/ckomop0x/ckomop0x-me/blog/etot-god-slovno-marafon/IMG_2783_2_rCmdP-qXAWT2W.jpg?tr=w-480,h-480,fo-top',
  },
};

const mockPosts: Post[] = [
  mockPost,
  {
    ...mockPost,
    documentId: '2',
    title: 'Next.js App Router — перший досвід',
    slug: 'nextjs-app-router-pershyi-dosvid',
    date: '2024-04-10T00:00:00.000Z',
    excerpt: 'Ділюся враженнями після міграції з Pages Router на App Router у реальному проєкті.',
  },
  {
    ...mockPost,
    documentId: '3',
    title: 'GraphQL codegen — зручно чи ні?',
    slug: 'graphql-codegen-zruchno-chy-ni',
    date: '2024-05-01T00:00:00.000Z',
    excerpt: 'Розбираємось, коли автогенерація типів допомагає, а коли заважає.',
  },
];

const meta = {
  title: 'Sections/PostsListSection',
  component: PostsListSection,
  tags: ['autodocs'],
  args: {
    blockTitle: 'Останні статті',
    blockSubtitle: 'Читайте найновіші публікації',
    posts: mockPosts,
    categoryInfo: {
      title: 'Блог',
      slug: '/blog',
    },
  },
} satisfies Meta<typeof PostsListSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EmptyPosts: Story = {
  name: 'No Posts',
  args: {
    posts: [],
  },
};

export const NoCategoryInfo: Story = {
  name: 'Without Category Link',
  args: {
    categoryInfo: null,
  },
};

export const Poetry: Story = {
  args: {
    blockTitle: 'Вірші',
    blockSubtitle: 'Підбірка авторської поезії',
    categoryInfo: {
      title: 'Поезія',
      slug: '/poetry',
    },
    posts: mockPosts.map((p) => ({
      ...p,
      category: { __typename: 'Category', documentId: 'cat-2', title: 'Поезія', slug: 'poetry', localizations: [] },
    })),
  },
};
