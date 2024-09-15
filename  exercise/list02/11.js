const orders = [
  {
    client: "Maria Silva",
    product: "Notebook",
    quantity: 2,
  },
  {
    client: "João Pereira",
    product: "Smartphone",
    quantity: 1,
  },
  {
    client: "Ana Souza",
    product: "Teclado Mecânico",
    quantity: 5,
  },
  {
    client: "Carlos Oliveira",
    product: "Mouse Gamer",
    quantity: 3,
  },
  {
    client: "Fernanda Costa",
    product: "Monitor",
    quantity: 2,
  },
];

let newObject = [];

orders.forEach(function (order) {
  newObject.push({ client: order.client, Quantity: order.quantity });
});

console.log(newObject);
