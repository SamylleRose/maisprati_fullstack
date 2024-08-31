let totalSum = 0;

for (let i = 0; i < 5; i++) {
  let number = parseFloat(prompt(`Enter number ${i + 1}:`));

  totalSum += number;
}

console.log(`The total sum of the 5 numbers is: ${totalSum}`);
