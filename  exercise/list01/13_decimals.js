const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum = 0;
let cont = 0;

function askForNumber() {
  rl.question("Enter a Number: ", function (number) {
    number = parseFloat(number);

    if (number === 0) {
      const average = sum / cont;
      console.log(`Average: ${average}`);
      rl.close();
    } else {
      sum += number;
      cont += 1;
      askForNumber();
    }
  });
}

askForNumber();
