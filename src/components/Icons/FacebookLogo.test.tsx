import { render, screen } from '@testing-library/react';

import FacebookLogo from './FacebookLogo';

describe('FacebookLogo', () => {
  it('Should render default component', () => {
    render(<FacebookLogo />);
    expect(screen.getByTitle('FacebookLogo')).toBeTruthy();
  });

  it('Should render default component', () => {
    render(<FacebookLogo title="Custom FacebookLogo" />);
    expect(screen.getByTitle('Custom FacebookLogo')).toBeTruthy();
  });
});
