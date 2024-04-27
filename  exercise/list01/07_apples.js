const quantityApples = parseInt(prompt("Enter the quantity of apples"));

if (quantityApples < 12) {
  price = 0.3 * quantityApples;
} else {
  price = 0.25 * quantityApples;
}
console.log("Price:", price);
