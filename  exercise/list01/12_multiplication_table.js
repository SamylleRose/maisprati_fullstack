const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Please enter a number to display its multiplication table: ",
  function (number) {
    number = parseInt(number);

    console.log(`Multiplication table for ${number}:`);
    for (let i = 1; i <= 10; i++) {
      let result = number * i;
      console.log(`${number} x ${i} = ${result}`);
    }

    rl.close();
  }
);
