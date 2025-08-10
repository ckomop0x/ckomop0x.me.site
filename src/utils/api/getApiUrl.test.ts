import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

import { getApiUrl } from './getApiUrl'

describe('utils/api/getApiUrl', () => {
  beforeEach(() => {
    vi.stubEnv('NEXT_PUBLIC_URL_LOCAL', 'http://localhost:3000')
    vi.stubEnv('NODE_ENV', 'development')
  });

  afterEach(() => {
    vi.unstubAllEnvs()
  });

  it('returns local URL in development', () => {
    expect(getApiUrl()).toBe('http://localhost:3000')
  });

  it('returns production URL in non-development', () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.stubEnv('NEXT_PUBLIC_URL', 'https://production.com')

    expect(getApiUrl()).toBe('https://production.com')
  });
})
