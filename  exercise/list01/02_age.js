const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your age: ", function (age) {
  age = parseInt(age);

  if (age < 0) {
    console.log("Invalid age entered. Please enter a positive number.");
  } else if (age <= 12) {
    console.log("You are classified as a Child.");
  } else if (age <= 17) {
    console.log("You are classified as an Adolescent.");
  } else if (age <= 64) {
    console.log("You are classified as an Adult.");
  } else if (age >= 65) {
    console.log("You are classified as an Elderly.");
  } else {
    console.log("Invalid age entered. Please enter a number.");
  }

  rl.close();
});
