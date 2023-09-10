// ** https://www.hackerrank.com/challenges/balanced-brackets/problem?isFullScreen=true

type IsBalanced = (s: string) => string;

const isBalanced: IsBalanced = (s) => {
  // ** Without Stacks
  // let flag = true;
  // while (flag) {
  //   let prev = s;
  //   s = s.replace('()', '').replace('[]', '').replace('{}', '');
  //   if (prev === s) flag = false;
  // }
  // return s.length > 0 ? 'NO' : 'YES';

  // ** With Stacks
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === '(' || char === '[' || char === '{') {
      // Push the element in the stack
      stack.push(char);
      continue;
    }

    // If current character is not opening
    // bracket, then it must be closing.
    // So stack cannot be empty.
    if (stack.length === 0) return 'NO';

    let check;
    switch (char) {
      case ')':
        check = stack.pop();
        if (check !== '(') return 'NO';
        break;

      case '}':
        check = stack.pop();
        if (check !== '{') return 'NO';
        break;

      case ']':
        check = stack.pop();
        if (check !== '[') return 'NO';
        break;
    }
  }

  // Check Empty Stack
  return stack.length === 0 ? 'YES' : 'NO';
};
