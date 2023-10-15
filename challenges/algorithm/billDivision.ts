type BonAppetit = (bill: number[], k: number, b: number) => void;

const bonAppetit: BonAppetit = (bill, k, b) => {
  let sum = bill.reduce((acc, price, index) => {
    if (index !== k) return (acc += price);
    else return acc;
  }, 0);

  const annaShare = sum / 2;

  console.log(annaShare === b ? 'Bon Appetit' : b - annaShare);
};

// Test
bonAppetit([3, 10, 2, 9], 1, 12);
