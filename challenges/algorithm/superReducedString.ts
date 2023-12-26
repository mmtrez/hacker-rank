// ** https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true

type SuperReducedString = (s: string) => string;

const superReducedString: SuperReducedString = (s) => {
  const output = s.split('');

  for (let i = 0; i < output.length; i++) {
    if (output[i] === output[i + 1]) {
      output.splice(i, 2);
      i = -1;
    }
  }

  return output.length > 0 ? output.join('') : 'Empty String';
};

// Test
console.log(superReducedString('aaabccddd'));
