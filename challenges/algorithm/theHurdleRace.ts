// ** https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true

type HurdleRace = (k: number, height: number[]) => number;

const hurdleRace: HurdleRace = (k, height) => {
  const maxH = Math.max(...height);

  if (maxH <= k) return 0;
  else return maxH - k;
};

// Test
console.log(hurdleRace(1, [1, 2, 3, 3, 2]));
