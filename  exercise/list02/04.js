const people = [
  {
    name: "João",
    age: 25,
    city: "São Paulo",
  },
  {
    name: "Maria",
    age: 30,
    city: "Rio de Janeiro",
  },
  {
    name: "Carlos",
    age: 28,
    city: "Belo Horizonte",
  },
  {
    name: "Ana",
    age: 22,
    city: "Curitiba",
  },
];

for (person of people) {
  console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
}
