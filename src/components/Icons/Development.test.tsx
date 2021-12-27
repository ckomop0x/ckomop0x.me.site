import { render, screen } from '@testing-library/react';

import Development from './Development';

describe('Development', () => {
  it('Should render default component', () => {
    render(<Development />);
    expect(screen.getByTitle('Development')).toBeTruthy();
  });

  it('Should render default component', () => {
    render(<Development title="Custom Icon" />);
    expect(screen.getByTitle('Custom Icon')).toBeTruthy();
  });
});
