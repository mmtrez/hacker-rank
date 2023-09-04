// ** https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

type BreakingRecords = (val: number[]) => number[];

const breakingRecords: BreakingRecords = (scores) => {
  const output = [0, 0];
  let highest = scores[0];
  let lowest = scores[0];

  scores.forEach((score) => {
    if (score > highest) {
      output[0]++;
      highest = score;
    }
    if (score < lowest) {
      output[1]++;
      lowest = score;
    }
  });

  return output;
};

// Test
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
