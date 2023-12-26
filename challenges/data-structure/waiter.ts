// ** https://www.hackerrank.com/challenges/waiter/problem?isFullScreen=true

type Waiter = (number: number[], q: number) => number[];
type IsPrime = (num: number) => boolean;
type GetPrimes = (length: number) => number[];

const isPrime: IsPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getPrimes: GetPrimes = (length) => {
  const primes = [];
  let i = 2;
  while (primes.length < length) {
    if (isPrime(i)) primes.push(i);
    i++;
  }
  return primes;
};

const waiter: Waiter = (number, q) => {
  const primes = getPrimes(q);
  let a = number;
  let b: number[] = [];
  let answers: number[] = [];

  const getDivideAnswers = (list: number[], divideBy: number) => {
    a = [];
    b = [];
    while (list.length) {
      const top = list.pop();
      if (top) top % divideBy === 0 ? b.push(top) : a.push(top);
    }
  };

  for (let i = 0; i < q; i++) {
    getDivideAnswers(a, primes[i]);
    answers = [...answers, ...b.reverse()];
    if (i === q - 1) {
      answers = [...answers, ...a.reverse()];
    }
  }

  return answers;
};

// Test
console.log(waiter([3, 3, 4, 4, 9], 2));
