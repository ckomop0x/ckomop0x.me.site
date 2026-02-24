import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, it, vi } from 'vitest';

const mockPush = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  useSearchParams: () => new URLSearchParams(),
}));

import PaginationNavigation from './PaginationNavigation';

describe('PaginationNavigation', () => {
  beforeEach(() => {
    mockPush.mockReset();
  });

  it('returns null when totalPages is 1', () => {
    const { container } = render(
      <PaginationNavigation currentPage={1} totalPages={1} />,
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders previous and next buttons', () => {
    render(<PaginationNavigation currentPage={2} totalPages={5} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });

  it('disables the previous button on the first page', () => {
    render(<PaginationNavigation currentPage={1} totalPages={5} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toBeDisabled();
  });

  it('disables the next button on the last page', () => {
    render(<PaginationNavigation currentPage={5} totalPages={5} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[buttons.length - 1]).toBeDisabled();
  });

  it('renders page numbers', () => {
    render(<PaginationNavigation currentPage={1} totalPages={3} />);
    expect(screen.getByText('1')).toBeTruthy();
    expect(screen.getByText('2')).toBeTruthy();
    expect(screen.getByText('3')).toBeTruthy();
  });

  it('navigates to the next page when next button is clicked', () => {
    render(<PaginationNavigation currentPage={2} totalPages={5} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[buttons.length - 1]);
    expect(mockPush).toHaveBeenCalledWith('?page=3');
  });

  it('navigates to the previous page when previous button is clicked', () => {
    render(<PaginationNavigation currentPage={3} totalPages={5} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(mockPush).toHaveBeenCalledWith('?page=2');
  });

  it('removes the page param when navigating to page 1', () => {
    render(<PaginationNavigation currentPage={2} totalPages={5} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);
    expect(mockPush).toHaveBeenCalledWith('?');
  });

  it('navigates to a specific page when a page number button is clicked', () => {
    render(<PaginationNavigation currentPage={1} totalPages={3} />);
    fireEvent.click(screen.getByText('3'));
    expect(mockPush).toHaveBeenCalledWith('?page=3');
  });
});
