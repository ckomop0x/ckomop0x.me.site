import getSrcSet from 'utils/image/getSrcSet';

describe('utils/image', () => {
  describe('getSrcSet', () => {
    it('Should return src set based on url', () => {
      expect(getSrcSet('https://ckomop0x.me/images/image.webp')).toBe(
        'https://ckomop0x.me/images/image.webp?tr=w-480,h-480,fo-top 640w, https://ckomop0x.me/images/image.webp?tr=w-660,h-660,fo-top 768w, https://ckomop0x.me/images/image.webp?tr=w-900,h-900,fo-top 993w, https://ckomop0x.me/images/image.webp?tr=w-993,h-993,fo-top 1920w',
      );
    });
  });
});
