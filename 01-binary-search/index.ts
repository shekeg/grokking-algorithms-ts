export function binarySearch(list: Array<number>, targetItem: number) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === targetItem) {
      return mid;
    } else if (guess > targetItem) {
      high = mid - 1;
    } else if (guess < targetItem) {
      low = mid + 1;
    }
  }

  return -1;
}
