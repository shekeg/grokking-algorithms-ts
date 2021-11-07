export function findMax(arr: Array<number>) {
  if (arr.length === 2) {
    return Math.max(arr[0], arr[1]);
  } else {
    return Math.max(arr[0], findMax(arr.slice(1)));
  }
}
