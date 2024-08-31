let number = parseInt(
  prompt("Please enter a number to display its multiplication table:")
);

console.log(`Multiplication table for ${number}:`);
for (let i = 1; i <= 10; i++) {
  let result = number * i;
  console.log(`${number} x ${i} = ${result}`);
}
