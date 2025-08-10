import { render, screen } from '@testing-library/react';

import { DetailItemProps } from './DetailItem';

import DetailItem from './index';

describe('DetailItem', () => {
  const date = new Date('2021-12-12');
  const title = 'Detail Test Item';
  const image = 'test-image.webp';
  const children = '<div>Some description content</div>';

  it('Should render default component', () => {
    const detailItemProps: DetailItemProps = {
      title,
      image,
      date,
      children,
      breadcrumbs: [],
    };

    render(<DetailItem {...detailItemProps} />);
    expect(screen.getByText(title).textContent).toBe(title);
  });
});
