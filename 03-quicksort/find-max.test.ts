import { findMax } from './find-max';

describe('03-quicksort/find-max', () => {
  it('should find max element in an array', () => {
    expect(findMax([2, 4, 6, 8])).toBe(8);
  });
});
