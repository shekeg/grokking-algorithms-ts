export function selectionSort(arr: Array<number>) {
  const sortedArray = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    const smallestIndex = findSmallestIndex(arr);
    sortedArray.push(arr.splice(smallestIndex, 1)[0]);
  }

  return sortedArray;
}

function findSmallestIndex(arr: Array<number>) {
  let smallestIndex = 0;
  let smallest = arr[smallestIndex];

  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < smallest) {
      smallestIndex = index;
      smallest = arr[index];
    }
  }

  return smallestIndex;
}
