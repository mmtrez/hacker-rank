// ** https://www.hackerrank.com/challenges/sparse-arrays/problem?isFullScreen=true

type MatchingStrings = (stringList: string[], queries: string[]) => number[];

const matchingStrings: MatchingStrings = (stringList, queries) => {
  return queries.map((query) => stringList.filter((string) => query === string).length);
};

// Test
console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));
