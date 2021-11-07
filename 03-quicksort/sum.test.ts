import { sum } from './sum';

describe('03-quicksort/sum', () => {
  it("should get sum of array's elements", () => {
    expect(sum([2, 4, 6, 8])).toBe(20);
  });
});
