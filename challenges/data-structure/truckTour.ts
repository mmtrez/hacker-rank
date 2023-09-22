// ** https://www.hackerrank.com/challenges/truck-tour/problem?isFullScreen=true

type TruckTour = (petrolpumps: number[][]) => number;

const truckTour: TruckTour = (petrolpumps) => {
  let fuel = 0;
  let minIndex = 0;

  for (let i = 0; i < petrolpumps.length; i++) {
    fuel = fuel + petrolpumps[i][0] - petrolpumps[i][1];
    if (fuel < 0) {
      fuel = 0;
      minIndex = i + 1;
    }
  }

  return minIndex;
};

// Test
console.log(
  truckTour([
    [1, 5],
    [10, 3],
    [3, 4],
  ]),
);
