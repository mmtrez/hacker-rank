// ** https://www.hackerrank.com/challenges/equal-stacks/problem?isFullScreen=true

/* EXPLANATION

h1 = [3, 2, 1, 1, 1]
h2 = [4, 3, 2]
h3 = [1, 1, 4, 1]

h1Heights = [1, 2, 3, 5, 8]
h2Heights = [2, 5, 9]
h3Heights = [1, 5, 6, 7]

commonHeights = [5]

*/

type EqualStacks = (h1: number[], h2: number[], h3: number[]) => number;

const equalStacks: EqualStacks = (h1, h2, h3) => {
  const getHeightsArr = (arr: number[]) => {
    let sum = 0;
    let heightsArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      sum += arr[i];
      heightsArr.push(sum);
    }
    return heightsArr;
  };

  const h1Heights = getHeightsArr(h1);
  const h2Heights = getHeightsArr(h2);
  const h3Heights = getHeightsArr(h3);

  const commonHeights = h1Heights.filter(
    (height) => h2Heights.includes(height) && h3Heights.includes(height),
  );

  return commonHeights.length > 0 ? Math.max(...commonHeights) : 0;
};

// Test
console.log(equalStacks([1, 2, 1, 1], [1, 1, 2], [1, 1]));
