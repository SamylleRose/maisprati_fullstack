let car = {
  mark: "Toyota",
  model: "Corola",
  year: 2021,
  color: "Prata",
};

for (let property in car) {
  console.log(property + ":" + car[property]);
}
