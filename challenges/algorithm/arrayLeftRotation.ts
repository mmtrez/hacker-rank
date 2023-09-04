// ** https://www.hackerrank.com/challenges/array-left-rotation/problem?isFullScreen=true

type RotateLeft = (d: number, arr: number[]) => number[];

const rotateLeft: RotateLeft = (d, arr) => {
  if (arr.length <= 1) return arr;
  for (let i = 1; i <= d; i++) {
    const removedItem = arr.shift() as number;
    arr.push(removedItem);
  }
  return arr;
};

// Test
console.log(rotateLeft(2, [1, 2, 3, 4, 5]));
