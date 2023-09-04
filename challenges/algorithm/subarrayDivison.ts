// ** https://www.hackerrank.com/challenges/one-month-preparation-kit-the-birthday-bar/problem?isFullScreen=true

type Birthday = (s: number[], d: number, m: number) => number;

const birthday: Birthday = (s, d, m) => {
  const sum = (arr: number[]) => arr.reduce((acc, n) => acc + n, 0);

  let res = 0;

  for (let i = 0; i <= s.length - m; i++) {
    if (sum(s.slice(i, i + m)) === d) res++;
  }

  return res;
};

// Test
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
