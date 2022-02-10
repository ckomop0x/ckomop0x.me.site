import { ENUM_POST_CATEGORY } from '../../../../../types/globalTypes';
import { FeaturedPostContentProps } from '../types';

export const featuredPostContentProps: FeaturedPostContentProps = {
  category: ENUM_POST_CATEGORY.poetry,
  categories: [
    {
      __typename: 'Category',
      id: '1',
      slug: 'poetry',
      title: 'Стихи',
    },
  ],
  title: 'На моих коленях',
  date: '2017-07-01T10:00:00.000Z',
  slug: 'na-moih-kolenyah',
  excerpt: `
  На моих коленях
  Ты станцуешь танго.
  Иди ко мне скорее
  Пока ещё не слишком рано.
  `,
};