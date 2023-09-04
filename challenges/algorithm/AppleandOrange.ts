// ** https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

type CountApplesAndOranges = (
  s: number,
  t: number,
  a: number,
  b: number,
  apples: number[],
  oranges: number[],
) => void;

const countApplesAndOranges: CountApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const countApple = apples.filter((apple) => {
    const loc = apple + a;
    return loc >= s && loc <= t;
  }).length;

  const countOrange = oranges.filter((orange) => {
    const loc = orange + b;
    return loc >= s && loc <= t;
  }).length;

  console.log(countApple);
  console.log(countOrange);
};

// Test
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
