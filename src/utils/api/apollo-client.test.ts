import { describe, it, expect, vi } from 'vitest'

// mock getGraphQLUrl to control the URI
vi.mock('@/utils/api/getGraphQLUrl', () => ({
  getGraphQLUrl: () => 'https://mocked-graphql.com',
}))

// mock ApolloClient class to observe instantiation
const mockApolloClient = vi.fn()
const mockInMemoryCache = vi.fn()

vi.mock('@apollo/client', async () => {
  const actual = await vi.importActual('@apollo/client')
  return {
    ...actual,
    ApolloClient: mockApolloClient,
    InMemoryCache: mockInMemoryCache,
  }
});

describe('utils/api/apollo-client', () => {
  it('creates ApolloClient with mocked URL and cache', async () => {
    await import('./apollo-client') // triggers instantiation

    expect(mockApolloClient).toHaveBeenCalledWith({
      uri: 'https://mocked-graphql.com',
      cache: expect.anything(), // cache mocked too
    })

    expect(mockInMemoryCache).toHaveBeenCalled()
  });
})
