// ** https://www.hackerrank.com/challenges/quicksort1/problem?isFullScreen=true

type QuickSort = (arr: number[]) => number[];

const quickSort: QuickSort = (arr) => {
  const pivot = arr[0];
  const left = [];
  const right = [];
  const equal = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else if (arr[i] > pivot) right.push(arr[i]);
    else equal.push(arr[i]);
  }

  return [...left, ...equal, ...right];
};

// Test
console.log(quickSort([4, 5, 3, 7, 2]));
