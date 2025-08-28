import { describe, it, expect, vi } from 'vitest';

import apolloClient from './apollo-client';
import getPostsWithPagination from './getPostsWithPagination';

// Mock the apollo client
vi.mock('./apollo-client', () => ({
  default: {
    query: vi.fn(),
  },
}));

describe('getPostsWithPagination', () => {
  it('should format posts and pagination data correctly', async () => {
    const mockResponse = {
      data: {
        posts_connection: {
          nodes: [
            {
              documentId: '1',
              title: 'Test Post 1',
              slug: 'test-post-1',
              excerpt: 'Test excerpt 1',
              date: '2024-01-01T00:00:00.000Z',
              category: { title: 'Blog', slug: 'blog' },
              PostImage: { url: 'test-image.jpg' },
            },
          ],
          pageInfo: {
            total: 12,
            page: 2,
            pageSize: 6,
            pageCount: 2,
          },
        },
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (apolloClient.query as any).mockResolvedValue(mockResponse);

    const result = await getPostsWithPagination({
      category: 'blog',
      page: 2,
      pageSize: 6,
      locale: 'ru',
      sort: 'date:desc',
    });

    expect(result.posts).toHaveLength(1);
    expect(result.posts[0].title).toBe('Test Post 1');
    expect(result.pagination).toEqual({
      total: 12,
      page: 2,
      pageSize: 6,
      pageCount: 2,
    });
  });

  it('should handle empty results', async () => {
    const mockResponse = {
      data: {
        posts_connection: {
          nodes: [],
          pageInfo: {
            total: 0,
            page: 1,
            pageSize: 6,
            pageCount: 0,
          },
        },
      },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (apolloClient.query as any).mockResolvedValue(mockResponse);

    const result = await getPostsWithPagination({
      category: 'blog',
      page: 1,
      pageSize: 6,
      locale: 'ru',
    });

    expect(result.posts).toHaveLength(0);
    expect(result.pagination.total).toBe(0);
  });
});
