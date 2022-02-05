import { render, screen } from '@testing-library/react';

import FeaturedPostContent from './FeaturedPostContent';
import { featuredPostContentProps } from './__mocks__/featuredPostContentProps';

describe('FeaturedPostContent', () => {
  it('Should render without excerpt', () => {
    render(<FeaturedPostContent {...featuredPostContentProps} excerpt="" />);
    expect(screen.getByText(featuredPostContentProps.title).textContent).toBe(
      featuredPostContentProps.title,
    );
  });

  it('Should render with excerpt', () => {
    render(<FeaturedPostContent {...featuredPostContentProps} />);
    expect(screen.getByText(featuredPostContentProps.title).textContent).toBe(
      featuredPostContentProps.title,
    );
  });
});
