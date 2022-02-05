import { render, screen } from '@testing-library/react';

import { ENUM_POST_CATEGORY } from '../../../../types/globalTypes';

import FeaturedPostContent, {
  FeaturedPostContentProps,
} from './FeaturedPostContent';

describe('FeaturedPostContent', () => {
  const date = '2017-07-01T10:00:00.000Z';
  const title = 'На моих коленях';
  const slug = 'na-moih-kolenyah';
  const excerpt = `
  На моих коленях
  Ты станцуешь танго.
  Иди ко мне скорее
  Пока ещё не слишком рано.
  `;

  it('Should render without excerpt', () => {
    const featuredPostContentProps: FeaturedPostContentProps = {
      category: ENUM_POST_CATEGORY.poetry,
      categories: [
        {
          __typename: 'Category',
          id: '1',
          slug: 'poetry',
          title: 'Стихи',
        },
      ],
      title,
      date,
      slug,
      excerpt: '',
    };

    render(<FeaturedPostContent {...featuredPostContentProps} />);
    expect(screen.getByText(title).textContent).toBe(title);
  });

  it('Should render with excerpt', () => {
    const featuredPostContentProps: FeaturedPostContentProps = {
      category: ENUM_POST_CATEGORY.poetry,
      categories: [
        {
          __typename: 'Category',
          id: '1',
          slug: 'poetry',
          title: 'Стихи',
        },
      ],
      title,
      date,
      slug,
      excerpt,
    };

    render(<FeaturedPostContent {...featuredPostContentProps} />);
    expect(screen.getByText(title).textContent).toBe(title);
  });
});
