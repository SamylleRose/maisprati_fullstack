function filterPropertyValue(product, minimumValue) {
  let newObjet = [];

  for (let property in product) {
    if (product[property] > minimumValue) {
      newObjet[property] = product[property];
    }
  }

  return newObjet;
}

let product = {
  name: "Camiseta",
  description: "Camiseta de algodão com estampa de flores",
  price: 59.9,
  category: "Vestuário",
  brand: "Marca Fictícia",
  stock: 120,
  color: "Azul",
  size: "M",
  material: "Algodão",
  weight: "200g",
};

let result = filterPropertyValue(product, 50);

console.log(result);
