// ** https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true

type CountingValleys = (steps: number, path: string) => number;

const countingValleys: CountingValleys = (steps, path) => {
  let pathArr = path.split('');
  let valleyCount = 0;
  let currentSeaLevel = 0;
  let valleyStatus = false;

  pathArr.forEach((path) => {
    path === 'U' ? currentSeaLevel++ : currentSeaLevel--;

    if (currentSeaLevel < 0 && !valleyStatus) {
      valleyCount++;
      valleyStatus = true;
    } else if (currentSeaLevel >= 0 && valleyStatus) {
      valleyStatus = false;
    }
  });

  return valleyCount;
};

// Test
console.log(countingValleys(8, 'UDDDUDUU'));
