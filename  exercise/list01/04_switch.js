const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Interactive Menu:");
console.log("1. Say Hello");
console.log("2. Calculate the sum of two numbers");
console.log("3. Exit");

rl.question("Please choose an option (1, 2, or 3): ", function (choice) {
  choice = parseInt(choice);

  switch (choice) {
    case 1:
      console.log("Hello! Hope you're having a great day!");
      rl.close();
      break;

    case 2:
      rl.question("Enter the first number: ", function (num1) {
        rl.question("Enter the second number: ", function (num2) {
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);
          let sum = num1 + num2;
          console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
          rl.close();
        });
      });
      break;

    case 3:
      console.log("Exiting the program. Goodbye!");
      rl.close();
      break;

    default:
      console.log("Invalid option. Please choose a valid option (1, 2, or 3).");
      rl.close();
      break;
  }
});
