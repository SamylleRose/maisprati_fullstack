let number = 1;

while (number != 0 && number > 0) {
  number = parseInt(prompt("Enter a Number: "));

  if (number % 2 == 0 && number != 0) {
    console.log("Par");
  } else if (number % 2 == 1) {
    console.log("Ímpar");
  }
}
