// ** https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true

type DivisibleSumPairs = (n: number, k: number, ar: number[]) => number;

const divisibleSumPairs: DivisibleSumPairs = (n, k, ar) => {
  let pairs = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) pairs++;
    }
  }

  return pairs;
};

// Test
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
