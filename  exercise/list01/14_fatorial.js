let number = parseInt(prompt("Please enter a number: "));

let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

// Display the result
console.log(`The factorial of ${number} is: ${factorial}`);
