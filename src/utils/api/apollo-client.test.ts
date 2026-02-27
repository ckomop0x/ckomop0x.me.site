import { describe, it, expect, vi } from 'vitest';

// mock getGraphQLUrl to control the URI
vi.mock('@/utils/api/getGraphQLUrl', () => ({
  getGraphQLUrl: () => 'https://mocked-graphql.com',
}));

// Prepare constructor spies
const mockApolloClient = vi.fn();
const mockInMemoryCache = vi.fn();
const mockHttpLink = vi
  .fn()
  .mockImplementation(function (opts) {
    return { __type: 'HttpLink', opts };
  });

// mock @apollo/client – replace constructors/classes with spies
vi.mock('@apollo/client', async () => {
  const actual =
    await vi.importActual<typeof import('@apollo/client')>('@apollo/client');
  return {
    ...actual,
    ApolloClient: mockApolloClient,
    InMemoryCache: mockInMemoryCache,
    HttpLink: mockHttpLink,
  };
});

describe('utils/api/apollo-client', () => {
  it('creates ApolloClient with mocked URL and cache', async () => {
    // importing triggers client setup
    await import('./apollo-client');

    // HttpLink should be constructed with the mocked URI
    expect(mockHttpLink).toHaveBeenCalledWith(
      expect.objectContaining({ uri: 'https://mocked-graphql.com' }),
    );

    // And ApolloClient should receive that same link instance + a cache
    const linkInstance = mockHttpLink.mock.results[0]?.value;
    expect(mockApolloClient).toHaveBeenCalledWith(
      expect.objectContaining({
        link: linkInstance,
        cache: expect.anything(),
      }),
    );

    // Cache constructor called
    expect(mockInMemoryCache).toHaveBeenCalled();
  });
});
