// ** https://www.hackerrank.com/challenges/queue-using-two-stacks/problem?isFullScreen=true

function processData(input) {
  const [_, ...inputArr] = input.split('\n');

  const queue = [];

  inputArr.forEach((input) => {
    switch (input[0]) {
      case '1':
        const value = input.split(' ')[1];
        queue.push(value);
        break;
      case '2':
        queue.shift();
        break;
      case '3':
        console.log(queue[0]);
        break;
    }
  });
}

// Test
const testInput = `1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`;

processData(testInput);
