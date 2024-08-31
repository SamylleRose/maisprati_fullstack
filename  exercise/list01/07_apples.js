const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the quantity of apples: ", function (quantityApples) {
  quantityApples = parseInt(quantityApples);
  let price;

  if (quantityApples < 12) {
    price = 0.3 * quantityApples;
  } else {
    price = 0.25 * quantityApples;
  }

  console.log("Price:", price.toFixed(2));
  rl.close();
});
