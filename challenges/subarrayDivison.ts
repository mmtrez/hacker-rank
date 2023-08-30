function birthday(s: number[], d: number, m: number): number {
  const sum = (arr: number[]) => arr.reduce((acc, n) => acc + n, 0);

  let res = 0;

  for (let i = 0; i <= s.length - m; i++) {
    if (sum(s.slice(i, i + m)) === d) res++;
  }

  return res;
}

// Test
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
