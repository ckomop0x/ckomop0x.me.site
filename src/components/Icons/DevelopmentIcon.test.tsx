import { render, screen } from '@testing-library/react';

import DevelopmentIcon from './DevelopmentIcon';

describe('DevelopmentIcon', () => {
  it('Should render default component', () => {
    render(<DevelopmentIcon />);
    expect(screen.getByTitle('Development')).toBeTruthy();
  });

  it('Should render default component', () => {
    render(<DevelopmentIcon title="Custom Icon" />);
    expect(screen.getByTitle('Custom Icon')).toBeTruthy();
  });
});
