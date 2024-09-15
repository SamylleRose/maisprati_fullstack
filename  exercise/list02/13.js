const cart = {
  items: [
    {
      name: "Notebook",
      quantity: 1,
      unitPrice: 3500.0,
    },
    {
      name: "Smartphone",
      quantity: 2,
      unitPrice: 1500.0,
    },
    {
      name: "Teclado Mecânico",
      quantity: 1,
      unitPrice: 200.0,
    },
    {
      name: "Mouse Gamer",
      quantity: 3,
      unitPrice: 150.0,
    },
    {
      name: "Monitor",
      quantity: 2,
      unitPrice: 800.0,
    },
  ],
};

let valueCart = 0;

cart.items.forEach(function (item) {
  valueCart += item.unitPrice;
});

console.log(valueCart);
