/*
  Complete the 'simpleArraySum' function below.
  The function is expected to return an INTEGER.
  The function accepts INTEGER_ARRAY ar as parameter.
  https://www.hackerrank.com/challenges/simple-array-sum/problem?isFullScreen=true
*/

type SimpleArraySum = (val: number[]) => number;

const simpleArraySum: SimpleArraySum = (arr) => {
  return arr.reduce((acc, i) => (acc += i), 0);
};

// Test
console.log(simpleArraySum([1, 4, 5]));
