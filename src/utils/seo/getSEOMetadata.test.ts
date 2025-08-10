import { describe, it, expect, vi, afterEach } from 'vitest'

import { getSEOMetadata } from './getSEOMetadata'

afterEach(() => {
  vi.unstubAllEnvs()
});

describe('utils/getSEOMetadata', () => {
  it('returns metadata with defaults and basic values', () => {
    const meta = getSEOMetadata({
      title: 'Test Title',
      description: 'Test Description',
    })

    expect(meta).toEqual({
      title: 'Test Title',
      description: 'Test Description',
      authors: [{ name: 'Павел Клочков' }],
      openGraph: {
        type: 'website',
        url: 'https://ckomop0x.me',
        title: 'Test Title',
        description: 'Test Description',
        siteName: 'ckomop0x.me. Личный сайт Павла Клочкова',
        images: [{ url: 'https://example.com/og.png' }],
      },
    })
  });

  it('respects env override for site URL', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://env-url.com')

    const meta = getSEOMetadata({
      title: 'With Env',
      description: 'From Env',
    })

    expect(meta.openGraph?.url).toBe('https://env-url.com')
  });

  it('merges custom openGraph values', () => {
    const meta = getSEOMetadata({
      title: 'Title',
      description: 'Desc',
      openGraph: {
        title: 'OG Title',
        url: 'https://custom.com',
        images: [{ url: 'https://custom.com/img.png', alt: 'alt' }],
      },
    })

    expect(meta.openGraph?.title).toBe('OG Title')
    expect(meta.openGraph?.url).toBe('https://custom.com')
    expect(meta.openGraph?.images).toEqual([
      { url: 'https://custom.com/img.png', alt: 'alt' },
    ])
  });
})
