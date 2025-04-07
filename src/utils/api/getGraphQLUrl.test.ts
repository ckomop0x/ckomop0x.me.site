import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

import { getGraphQLUrl } from '@/utils/api/getGraphQLUrl';

describe('utils/api/getGraphQLUrl', () => {
  beforeEach(() => {
    vi.stubEnv('NEXT_PUBLIC_URL_LOCAL', 'http://localhost:3000');
    vi.stubEnv('NODE_ENV', 'development');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('returns GraphQL URL correctly for local', () => {
    expect(getGraphQLUrl()).toBe('http://localhost:3000/graphql');
  });

  it('returns GraphQL URL correctly for production', () => {
    vi.stubEnv('NODE_ENV', 'production');
    vi.stubEnv('NEXT_PUBLIC_URL', 'https://production.com');

    expect(getGraphQLUrl()).toBe('https://production.com/graphql');
  });
});
