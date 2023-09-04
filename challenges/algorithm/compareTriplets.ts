// ** https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true

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
