const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter a number: ", function (number) {
  number = parseInt(number);

  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  console.log(`The factorial of ${number} is: ${factorial}`);
  rl.close();
});
