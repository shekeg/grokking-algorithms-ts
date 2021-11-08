export function quicksort(arr: Array<number>) {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0];

    const lessArr = [];
    const greaterArr = [];

    arr.slice(1).forEach((item) => {
      if (item < pivot) {
        lessArr.push(item);
      }
      if (item > pivot) {
        greaterArr.push(item);
      }
    });

    return [...quicksort(lessArr), pivot, ...quicksort(greaterArr)];
  }
}
