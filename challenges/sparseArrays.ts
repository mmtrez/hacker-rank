/*
  Complete the 'matchingStrings' function below.
  The function is expected to return an INTEGER_ARRAY.
  The function accepts following parameters:
   1. STRING_ARRAY stringList
   2. STRING_ARRAY queries
   Example:
   stringList = ['ab', 'ab', 'abc']
   queries = ['ab', 'abc', 'bc']
   output = [2, 1, 0]
*/

const matchingStrings = (stringList: string[], queries: string[]) => {
  return queries.map((query) => stringList.filter((string) => query === string).length);
};

console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));
