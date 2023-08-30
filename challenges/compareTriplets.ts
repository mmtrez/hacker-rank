/*
  Complete the 'compareTriplets' function below.
  The function is expected to return an INTEGER_ARRAY.
  The function accepts following parameters:
   1. INTEGER_ARRAY a
   2. INTEGER_ARRAY b
  https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
*/

type CompareTriplets = (a: number[], b: number[]) => number[];

const compareTriplets: CompareTriplets = (alice, bob) => {
  const points = [0, 0];

  alice.forEach((n, index) =>
    n > bob[index] ? points[0]++ : n < bob[index] ? points[1]++ : null,
  );

  return points;
};

// Test
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
