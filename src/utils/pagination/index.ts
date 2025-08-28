export interface PaginationInfo {
  total: number;
  page: number;
  pageSize: number;
  pageCount: number;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const calculatePagination = (
  currentPage: number,
  pageSize: number,
  totalCount: number,
): PaginationInfo => ({
  total: totalCount,
  page: currentPage,
  pageSize,
  pageCount: Math.ceil(totalCount / pageSize),
});

export const getPageNumbers = (
  currentPage: number,
  totalPages: number,
): number[] => {
  const delta = 2; // number of pages to show on each side of current page
  const range: number[] = [];
  const rangeWithDots: number[] = [];

  for (
    let i = Math.max(2, currentPage - delta);
    i <= Math.min(totalPages - 1, currentPage + delta);
    i++
  ) {
    range.push(i);
  }

  if (currentPage - delta > 2) {
    rangeWithDots.push(1, -1); // -1 represents dots
  } else {
    rangeWithDots.push(1);
  }

  rangeWithDots.push(...range);

  if (currentPage + delta < totalPages - 1) {
    rangeWithDots.push(-1, totalPages);
  } else if (totalPages > 1) {
    rangeWithDots.push(totalPages);
  }

  return rangeWithDots;
};
