import { render, screen } from '@testing-library/react';

import FacebookLogo from './FacebookLogo';

describe('FacebookLogo', () => {
  it('Should render default component', () => {
    render(<FacebookLogo />);
    expect(screen.getByTitle('Facebook Logo')).toBeTruthy();
  });

  it('Should render default component', () => {
    render(<FacebookLogo title="Custom Icon" />);
    expect(screen.getByTitle('Custom Icon')).toBeTruthy();
  });
});
