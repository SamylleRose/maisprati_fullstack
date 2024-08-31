const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", function (number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number);
  }
  rl.close();
});
