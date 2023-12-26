// ** https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

type GetTotalX = (a: number[], b: number[]) => number;

const getTotalX: GetTotalX = (a, b) => {
  const min = a.sort((n1, n2) => n2 - n1)[0];
  const max = b.sort((n1, n2) => n1 - n2)[0];
  let testValue = min;
  let resCount = 0;

  for (testValue; testValue <= max; testValue++) {
    const cond1 = a.every((item) => testValue % item === 0);
    const cond2 = b.every((item) => item % testValue === 0);

    if (cond1 && cond2) resCount++;
  }

  return resCount;
};

// Test
console.log(getTotalX([2, 6], [24, 36]));
