export function sum(arr: Array<number>) {
  if (arr.length <= 1) {
    return arr[0];
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}
