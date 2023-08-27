/*
  Complete the 'rotateLeft' function below.
  The function is expected to return an INTEGER_ARRAY.
  The function accepts following parameters:
   1. INTEGER d
   2. INTEGER_ARRAY arr
   Example:
   d = 4
   arr = [1, 2, 3, 4, 5]
   output = [5, 1, 2, 3, 4]
*/

const arrayLeftRotation = (d: number, arr: number[]) => {
  if (arr.length <= 1) return arr;
  for (let i = 1; i <= d; i++) {
    const removedItem = arr.shift() as number;
    arr.push(removedItem);
  }
  return arr;
};

console.log(arrayLeftRotation(2, [1, 2, 3, 4, 5]));
