const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your grade (0 to 10): ", function (grade) {
  grade = parseFloat(grade);

  if (grade >= 7 && grade <= 10) {
    console.log("Approved");
  } else if (grade >= 5 && grade < 7) {
    console.log("Recovery");
  } else if (grade >= 0 && grade < 5) {
    console.log("Failed");
  } else {
    console.log("Invalid grade. Please enter a number between 0 and 10.");
  }

  rl.close();
});
