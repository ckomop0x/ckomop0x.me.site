import { print } from 'graphql';
import { describe, it, expect } from 'vitest';

import { blogPageQuery } from './blogPageQuery.gql';

/**
 * This test suite checks the structure and validity of the GraphQL query
 * defined in blogPageQuery.gql. It ensures that the query is correctly
 * written and contains the expected fields.
 */

describe('blogPageQuery', () => {
  it('should be a valid GraphQL document', () => {
    expect(blogPageQuery).toBeDefined();
    expect(typeof blogPageQuery).toBe('object');
  });

  it('should contain expected fields', () => {
    const printed = print(blogPageQuery);
    expect(printed).toContain('query BlogPageQuery');
    expect(printed).toContain('blogPage');
    expect(printed).toContain('posts');
    expect(printed).toContain('title');
    expect(printed).toContain('slug');
  });
});
