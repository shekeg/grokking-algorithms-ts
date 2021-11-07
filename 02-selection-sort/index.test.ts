import { selectionSort } from './index';

describe('02-selection-sort', () => {
  it('should elements sort of array from min to max', () => {
    expect(selectionSort([5, 3, 6, 2, 10])).toEqual([2, 3, 5, 6, 10]);
  });
});
