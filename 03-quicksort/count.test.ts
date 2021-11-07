import { count } from './count';

describe('03-quicksort/count', () => {
  it('should count the number of items in an array', () => {
    expect(count([2, 4, 6, 8])).toBe(4);
  });
});
