let number;
let sum = 0;
let cont = 0;

while (true) {
  number = parseFloat(prompt("Enter a Number: "));
  if (number == 0) {
    break;
  }
  sum += number;
  cont += 1;
}

const average = sum / cont;
console.log(average);
