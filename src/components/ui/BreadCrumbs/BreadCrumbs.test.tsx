import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { Breadcrumbs } from './BreadCrumbs';

describe('Breadcrumbs', () => {
  it('renders the navigation with aria-label', () => {
    render(<Breadcrumbs breadcrumbs={[{ label: 'Home', href: '/' }]} />);
    const nav = screen.getByRole('navigation');
    expect(nav.getAttribute('aria-label')).toBe('breadcrumb');
  });

  it('renders all breadcrumb labels', () => {
    const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'Post' }];
    render(<Breadcrumbs breadcrumbs={breadcrumbs} />);
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Blog')).toBeTruthy();
    expect(screen.getByText('Post')).toBeTruthy();
  });

  it('renders item as a link when href is provided', () => {
    render(<Breadcrumbs breadcrumbs={[{ label: 'Home', href: '/' }]} />);
    const link = screen.getByRole('link', { name: 'Home' });
    expect(link.getAttribute('href')).toBe('/');
  });

  it('renders item as current page when no href', () => {
    render(<Breadcrumbs breadcrumbs={[{ label: 'Current Page' }]} />);
    const page = screen.getByRole('link', { name: 'Current Page' });
    expect(page.getAttribute('aria-current')).toBe('page');
  });

  it('renders with empty breadcrumbs list', () => {
    const { container } = render(<Breadcrumbs breadcrumbs={[]} />);
    expect(container.querySelector('nav')).toBeTruthy();
  });
});
