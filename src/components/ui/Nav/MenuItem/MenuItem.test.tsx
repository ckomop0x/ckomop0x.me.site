import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import MenuItem from './index';

describe('MenuItem', () => {
  it('renders children text', () => {
    render(<MenuItem linkSrc="/blog/">Блог</MenuItem>);
    expect(screen.getByText('Блог')).toBeTruthy();
  });

  it('renders with correct href', () => {
    render(<MenuItem linkSrc="/blog/">Блог</MenuItem>);
    const link = screen.getByRole('link', { name: 'Блог' });
    expect(link.getAttribute('href')).toBe('/blog');
  });

  it('applies inner styles when isInner is true', () => {
    render(
      <MenuItem linkSrc="/blog/" isInner>
        Блог
      </MenuItem>,
    );
    const link = screen.getByRole('link', { name: 'Блог' });
    expect(link.className).toContain('text-gray-800');
  });

  it('applies outer styles when isInner is false', () => {
    render(<MenuItem linkSrc="/blog/">Блог</MenuItem>);
    const link = screen.getByRole('link', { name: 'Блог' });
    expect(link.className).toContain('text-white');
  });
});
