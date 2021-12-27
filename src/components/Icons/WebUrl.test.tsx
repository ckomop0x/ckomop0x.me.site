import { render, screen } from '@testing-library/react';

import WebUrl from './WebUrl';

describe('Idea', () => {
  it('Should render default component', () => {
    render(<WebUrl />);
    expect(screen.getByTitle('WebUrl')).toBeTruthy();
  });

  it('Should render default component', () => {
    render(<WebUrl title="Custom WebUrl Icon" />);
    expect(screen.getByTitle('Custom WebUrl Icon')).toBeTruthy();
  });
});
