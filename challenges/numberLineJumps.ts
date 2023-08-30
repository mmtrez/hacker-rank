/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

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
