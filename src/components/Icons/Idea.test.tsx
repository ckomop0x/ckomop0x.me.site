import { render, screen } from '@testing-library/react';

import Idea from './Idea';

describe('Idea', () => {
  it('Should render default component', () => {
    render(<Idea />);
    expect(screen.getByTitle('Idea')).toBeTruthy();
  });

  it('Should render default component', () => {
    render(<Idea title="Custom Icon" />);
    expect(screen.getByTitle('Custom Icon')).toBeTruthy();
  });
});
