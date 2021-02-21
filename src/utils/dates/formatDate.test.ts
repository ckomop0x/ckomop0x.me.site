import formatDate from './formatDate';

describe('formatDate', () => {
  it('Should work', () => {
    expect(formatDate('2020-05-10T19:10:06.765Z')).toBe('10 мая 2020');
  });
});
