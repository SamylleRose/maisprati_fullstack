const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", function (number) {
  number = parseInt(number);

  if (number % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }

  rl.close();
});
