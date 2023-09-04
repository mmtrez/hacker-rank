// ** https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

type MiniMaxSum = (val: number[]) => void;

const miniMaxSum: MiniMaxSum = (arr) => {
  const length = arr.length;
  const sortedArr = arr.sort((a, b) => a - b);
  let min = 0;
  let max = 0;

  sortedArr.forEach((value, index) => {
    if (index === 0) {
      min += value;
    } else if (index === length - 1) {
      max += value;
    } else {
      min += value;
      max += value;
    }
  });

  console.log(`${min} ${max}`);
};

// Test
miniMaxSum([1, 2, 3, 4, 5]);
