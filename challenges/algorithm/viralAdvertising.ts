// ** https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true

type ViralAdvertising = (n: number) => number;

const viralAdvertising: ViralAdvertising = (n) => {
  let shared = 5;
  let liked = 2;

  for (let day = 1; day < n; day++) {
    shared = Math.floor(shared / 2) * 3;
    liked += Math.floor(shared / 2);
  }
  return liked;
};
