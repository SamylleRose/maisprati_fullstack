const stock = [
  {
    product: "Notebook",
    quantity: 20,
    minimum: 25,
  },
  {
    product: "Smartphone",
    quantity: 50,
    minimum: 10,
  },
  {
    product: "Teclado Mecânico",
    quantity: 100,
    minimum: 20,
  },
  {
    product: "Mouse Gamer",
    quantity: 75,
    minimum: 80,
  },
  {
    product: "Monitor",
    quantity: 30,
    minimum: 10,
  },
];

stock.forEach(function (product) {
  if (product.quantity < product.minimum) {
    product.quantity *= 2;
  }
});

console.log(stock);
