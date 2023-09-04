// ** https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true

type DiagonalDifference = (val: number[][]) => number;

const diagonalDifference: DiagonalDifference = (arr) => {
  const zeroBasedlength = arr.length - 1;
  let rtlDiagonal = 0;
  let ltrDiagonal = 0;

  for (let i = 0; i <= zeroBasedlength; i++) {
    rtlDiagonal += arr[i][i];
    ltrDiagonal += arr[i][zeroBasedlength - i];
  }

  return Math.abs(ltrDiagonal - rtlDiagonal);
};

// Test
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ]),
);
