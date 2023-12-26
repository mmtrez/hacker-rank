// ** https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=true

type MinimumNumber = (n: number, password: string) => number;
type PasswordTest = (reg: RegExp, password: string) => void;

const minimumNumber: MinimumNumber = (n, password) => {
  let length = n;
  let minOperation = 0;

  // RegExp
  const lowercaseReg = /[a-z]/;
  const uppercaseReg = /[A-Z]/;
  const numbersReg = /[0-9]/;
  const specialCharsReg = /[!@#$%^&*()+-]/;

  const passwordTest: PasswordTest = (reg, password) => {
    if (!reg.test(password)) {
      minOperation++;
      length++;
    }
  };

  passwordTest(lowercaseReg, password);
  passwordTest(uppercaseReg, password);
  passwordTest(numbersReg, password);
  passwordTest(specialCharsReg, password);

  // is at least 6 digit
  if (length < 6) {
    minOperation += 6 - length;
  }

  return minOperation;
};

// Test
console.log(minimumNumber(7, 'AUzs-nV'));
