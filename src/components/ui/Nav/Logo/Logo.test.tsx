import { render, screen } from '@testing-library/react';

import { mockImageUrl } from '../../../../../__mocks__/mockImageUrl';

import Logo from './index';

describe('Logo', () => {
  const imgSrc = '/logo1234.webp';
  const title = 'Ckomop0x.me Logo';
  const linkSrc = 'https://ckomop0x.me';

  it('Should render default components', () => {
    render(<Logo imgSrc={imgSrc} title={title} linkSrc={linkSrc} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
