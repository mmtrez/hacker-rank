// ** https://www.hackerrank.com/challenges/camelcase/problem?isFullScreen=true

type CamelCase = (val: string) => number;

const camelcase: CamelCase = (s) => {
  // Remove all Lower Case chars -> count all UpperCase chars -> +1 because the first word starts with a lowercase
  const removedLowerCases = s.replace(/[a-z]/g, '');
  return removedLowerCases.length + 1;
};
