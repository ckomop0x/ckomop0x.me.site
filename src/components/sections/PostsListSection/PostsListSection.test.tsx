import { render, screen } from '@testing-library/react';

import { Post } from '@/types';

import PostsListSection from './PostsListSection';

const mockPost: Post = {
  documentId: '1',
  title: 'Тестова стаття',
  slug: 'testova-stattia',
  date: '2024-01-01T00:00:00.000Z',
  excerpt: 'Короткий опис статті',
  localizations: [],
  category: { __typename: 'Category', documentId: 'cat-1', title: 'Блог', slug: 'blog', localizations: [] },
  coverImage: null,
  PostImage: {
    __typename: 'ComponentContentImage',
    id: 'img-1',
    title: 'image',
    url: 'https://example.com/image.jpg',
  },
};

const defaultProps = {
  blockTitle: 'Останні статті',
  blockSubtitle: 'Читайте найновіші публікації',
  posts: [],
  categoryInfo: {
    title: 'Блог',
    slug: '/blog',
  },
};

describe('PostsListSection', () => {
  it('renders blockTitle and blockSubtitle', () => {
    render(<PostsListSection {...defaultProps} />);

    expect(screen.getByText('Останні статті').textContent).toBeTruthy();
    expect(screen.getByText('Читайте найновіші публікації').textContent).toBeTruthy();
  });

  it('renders the CTA button with the category title', () => {
    render(<PostsListSection {...defaultProps} />);

    expect(screen.getByRole('link', { name: /блог/i })).toBeTruthy();
    expect(screen.getByText(/Перейти у блог/i).textContent).toBeTruthy();
  });

  it('renders the link with the correct category slug', () => {
    render(<PostsListSection {...defaultProps} />);

    const link = screen.getByRole('link', { name: /блог/i });
    expect(link.getAttribute('href')).toBe('/blog');
  });

  it('renders posts when provided', () => {
    render(<PostsListSection {...defaultProps} posts={[mockPost]} />);

    expect(screen.getByText('Тестова стаття').textContent).toBeTruthy();
  });

  it('renders multiple posts', () => {
    const posts: Post[] = [
      mockPost,
      { ...mockPost, documentId: '2', title: 'Друга стаття', slug: 'druha-stattia' },
    ];
    render(<PostsListSection {...defaultProps} posts={posts} />);

    expect(screen.getByText('Тестова стаття')).toBeTruthy();
    expect(screen.getByText('Друга стаття')).toBeTruthy();
  });

  it('renders with empty href when categoryInfo is not provided', () => {
    render(<PostsListSection {...defaultProps} categoryInfo={null} />);

    const link = screen.getByText(/Перейти у/i).closest('a');
    expect(link?.getAttribute('href')).toBe('');
  });

  it('renders with empty category title when categoryInfo is not provided', () => {
    render(<PostsListSection {...defaultProps} categoryInfo={null} />);

    expect(screen.getByText(/Перейти у\s*$/i)).toBeTruthy();
  });
});

