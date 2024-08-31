// Display the menu options to the user
console.log("Interactive Menu:");
console.log("1. Say Hello");
console.log("2. Calculate the sum of two numbers");
console.log("3. Exit");

let choice = parseInt(prompt("Please choose an option (1, 2, or 3):"));

switch (choice) {
  case 1:
    console.log("Hello! Hope you're having a great day!");
    break;

  case 2:
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    let sum = num1 + num2;
    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
    break;

  case 3:
    console.log("Exiting the program. Goodbye!");
    break;

  default:
    console.log("Invalid option. Please choose a valid option (1, 2, or 3).");
}
