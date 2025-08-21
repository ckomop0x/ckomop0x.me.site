import { describe, it, expect } from 'vitest';
import getPostsWithPagination from './getPostsWithPagination';
import apolloClient from './apollo-client';

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
            {
              documentId: '2',
              title: 'Test Post 2', 
              slug: 'test-post-2',
              excerpt: 'Test excerpt 2',
              date: '2024-01-02T00:00:00.000Z',
              category: { title: 'Poetry', slug: 'poetry' },
              PostImage: { url: 'test-image2.jpg' },
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

    (apolloClient.query as any).mockResolvedValue(mockResponse);

    const result = await getPostsWithPagination({
      category: 'blog',
      page: 2,
      pageSize: 6,
      locale: 'ru',
      sort: 'date:desc',
    });

    expect(result.posts).toHaveLength(2);
    expect(result.posts[0].title).toBe('Test Post 1');
    expect(result.pagination).toEqual({
      total: 12,
      page: 2,
      pageSize: 6,
      pageCount: 2,
    });

    // Verify the query was called with correct variables
    expect(apolloClient.query).toHaveBeenCalledWith({
      query: expect.any(Object),
      variables: {
        category: 'blog',
        page: 2,
        pageSize: 6,
        locale: 'ru',
        sort: ['date:desc'],
      },
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