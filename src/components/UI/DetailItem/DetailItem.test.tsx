import { render, screen } from '@testing-library/react';

import { DetailItemProps } from './DetailItem';

import DetailItem from './index';

describe('DetailItem', () => {
  const date = new Date('2021-12-12');
  const title = 'Detail Test Item';
  const image = 'test-image.webp';
  const description = '<div>Some description content</div>';

  it('Should render default component', () => {
    const detailItemProps: DetailItemProps = {
      title,
      description,
      date,
      image,
    };

    render(<DetailItem {...detailItemProps} />);
    expect(screen.getByText(title).textContent).toBe(title);
  });

  it('Should render component without description', () => {
    const detailItemProps: DetailItemProps = {
      title,
      description: '',
      date,
      image,
    };

    render(<DetailItem {...detailItemProps} />);
    expect(screen.getByText('Почему-то здесь пусто.').textContent).toBeTruthy();
  });
});
