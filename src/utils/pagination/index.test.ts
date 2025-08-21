import { describe, it, expect } from 'vitest';

import { calculatePagination, getPageNumbers } from './index';

describe('pagination utilities', () => {
  describe('calculatePagination', () => {
    it('should calculate pagination info correctly', () => {
      const result = calculatePagination(2, 6, 25);

      expect(result).toEqual({
        total: 25,
        page: 2,
        pageSize: 6,
        pageCount: 5, // Math.ceil(25/6) = 5
      });
    });

    it('should handle edge case with exact division', () => {
      const result = calculatePagination(1, 5, 10);

      expect(result).toEqual({
        total: 10,
        page: 1,
        pageSize: 5,
        pageCount: 2,
      });
    });

    it('should handle single page case', () => {
      const result = calculatePagination(1, 10, 5);

      expect(result).toEqual({
        total: 5,
        page: 1,
        pageSize: 10,
        pageCount: 1,
      });
    });
  });

  describe('getPageNumbers', () => {
    it('should return simple range for few pages', () => {
      const result = getPageNumbers(2, 4);
      expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should return range with dots for many pages', () => {
      const result = getPageNumbers(5, 10);
      expect(result).toEqual([1, -1, 3, 4, 5, 6, 7, -1, 10]);
    });

    it('should handle first page correctly', () => {
      const result = getPageNumbers(1, 10);
      expect(result).toEqual([1, 2, 3, -1, 10]);
    });

    it('should handle last page correctly', () => {
      const result = getPageNumbers(10, 10);
      expect(result).toEqual([1, -1, 8, 9, 10]);
    });

    it('should handle single page', () => {
      const result = getPageNumbers(1, 1);
      expect(result).toEqual([1]);
    });
  });
});
