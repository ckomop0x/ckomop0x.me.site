import getItemPath from './getItemPath';

describe('utils/queries', () => {
  describe('getItemPath', () => {
    it('Should return text with error', () => {
      const params = {
        slug: null,
      };
      expect(getItemPath(params)).toBe(
        'Wrong item format, should be item.slug:string',
      );
    });
    it('Should return params with slug', () => {
      const params = {
        slug: 'main-post',
      };
      expect(getItemPath(params)).toEqual({
        params: {
          slug: 'main-post',
        },
      });
    });
  });
});
