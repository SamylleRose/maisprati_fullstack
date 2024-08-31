const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalSum = 0;
let count = 0;

function askForNumber() {
  if (count < 5) {
    rl.question(`Enter number ${count + 1}: `, function (number) {
      totalSum += parseFloat(number);
      count++;
      askForNumber();
    });
  } else {
    console.log(`The total sum of the 5 numbers is: ${totalSum}`);
    rl.close();
  }
}

askForNumber();
