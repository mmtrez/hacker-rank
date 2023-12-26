// ** https://www.hackerrank.com/challenges/maximum-element/problem?isFullScreen=true

type GetMax = (val: string[]) => number[];

const getMax: GetMax = (operations) => {
  const stack: number[] = [];
  const maxArr: number[] = [];

  const performQuery = (operation: string) => {
    switch (operation.charAt(0)) {
      case '1':
        // Push the element x into the stack
        stack.push(Number(operation.split(' ')[1]));
        break;
      case '2':
        // Delete the element at the top of the stack
        stack.pop();
        break;
      case '3':
        // Find the maximum element in the stack
        const max = Math.max(...stack);
        maxArr.push(max);
        break;
    }
  };

  operations.forEach((operation) => performQuery(operation));

  // Return every max element
  return maxArr;
};

// Test
console.log(getMax(['1 97', '2', '1 20', '2', '1 26', '1 20', '2', '3', '1 91', '3']));
