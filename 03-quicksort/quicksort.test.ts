import { quicksort } from './quicksort';

describe('03-quicksort/quicksort', () => {
  it('should elements sort of array from min to max', () => {
    expect(quicksort([5, 3, 6, 2, 10])).toEqual([2, 3, 5, 6, 10]);
  });
});
