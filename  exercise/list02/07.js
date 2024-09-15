const products = [
  {
    name: "Notebook",
    price: 3500.0,
    discount: 10,
  },
  {
    name: "Smartphone",
    price: 1500.0,
    discount: 5,
  },
  {
    name: "Teclado Mecânico",
    price: 200.0,
    discount: 15,
  },
  {
    name: "Mouse Gamer",
    price: 150.0,
    discount: 20,
  },
  {
    name: "Monitor",
    price: 800.0,
    discount: 12,
  },
];

products.forEach(function (product) {
  product.price = product.price - product.price * 0.1;
  console.log(
    `Produto: ${product.name}, Novo Preço: R$ ${product.price.toFixed(2)}`
  );
});
