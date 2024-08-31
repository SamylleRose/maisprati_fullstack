const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Number One: ", function (numberOne) {
  rl.question("Number Two: ", function (numberTwo) {
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);

    if (numberOne > numberTwo) {
      console.log(numberTwo, numberOne);
    } else {
      console.log(numberOne, numberTwo);
    }

    rl.close();
  });
});
