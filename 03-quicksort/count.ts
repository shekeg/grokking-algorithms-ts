export function count(arr: Array<number>) {
  if (arr.length <= 1) {
    return 1;
  } else {
    return 1 + count(arr.slice(1));
  }
}
