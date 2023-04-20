import { render, screen } from '@testing-library/react';

import TopMenu from './index';

describe('TopMenu', () => {
  it('Should render default component', () => {
    render(<TopMenu />);
    const menuItems = screen.getAllByRole('link');
    expect(menuItems.length).toBe(2);
  });
});
