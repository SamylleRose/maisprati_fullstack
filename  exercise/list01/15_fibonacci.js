let numberOne = 0;
let numberTwo = 1;

console.log(numberOne);
console.log(numberTwo);

for (i = 0; i < 8; i++) {
  nextNumber = numberOne + numberTwo;

  console.log(nextNumber);

  numberOne = numberTwo;
  numberTwo = nextNumber;
}
