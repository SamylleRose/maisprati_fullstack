const sales = [
  {
    product: "Notebook",
    quantity: 2,
    value: 7000,
  },
  {
    product: "Smartphone",
    quantity: 5,
    value: 7500,
  },
  {
    product: "Teclado Mecânico",
    quantity: 10,
    value: 2000,
  },
  {
    product: "Mouse Gamer",
    quantity: 4,
    value: 600,
  },
  {
    product: "Monitor",
    quantity: 3,
    value: 2400,
  },
];

let totalSales = 0;

sales.forEach(function (sale) {
  totalSales += sale.value;
});

console.log(totalSales);
