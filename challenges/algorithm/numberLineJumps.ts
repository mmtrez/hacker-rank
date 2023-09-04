// ** https://www.hackerrank.com/challenges/three-month-preparation-kit-kangaroo/problem?isFullScreen=true

type Kangaroo = (x1: number, v1: number, x2: number, v2: number) => string;

const kangaroo: Kangaroo = (x1, v1, x2, v2) => {
  // v1t + x1 = v2t + x2
  // t = (x2 - x1)/(v1 - v2)
  // t > 0 and integer -> YES
  // else -> NO
  const t = (x2 - x1) / (v1 - v2);
  return t > 0 && Number.isInteger(t) ? 'YES' : 'NO';
};

// Test
console.log(kangaroo(0, 2, 5, 3));
