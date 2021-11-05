import { binarySearch } from './index';

describe('01-binary-search', () => {
  it('should find index of target element', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const targetItem = 9;

    expect(binarySearch(arr, targetItem)).toBe(8);
  });
  it('should return -1 if target element does not exist', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const targetItem = 999;

    expect(binarySearch(arr, targetItem)).toBe(-1);
  });
});
