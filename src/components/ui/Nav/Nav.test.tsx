import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Nav from './index';

describe('Nav', () => {
  it('renders the logo title', () => {
    render(<Nav />);
    expect(screen.getByText('Павел Клочков')).toBeTruthy();
  });

  it('renders Blog menu item', () => {
    render(<Nav />);
    expect(screen.getByText('Блог')).toBeTruthy();
  });

  it('renders Poetry menu item', () => {
    render(<Nav />);
    expect(screen.getByText('Вірші')).toBeTruthy();
  });

  it('renders menu items with correct links', () => {
    render(<Nav />);
    const blogLink = screen.getByRole('link', { name: 'Блог' });
    const poetryLink = screen.getByRole('link', { name: 'Вірші' });
    expect(blogLink.getAttribute('href')).toBe('/blog');
    expect(poetryLink.getAttribute('href')).toBe('/poetry');
  });
});
