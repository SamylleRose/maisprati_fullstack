const clients = [
  {
    name: "João Silva",
    age: 30,
    city: "São Paulo",
  },
  {
    name: "Maria Oliveira",
    age: 25,
    city: "Rio de Janeiro",
  },
  {
    name: "Pedro Santos",
    age: 40,
    city: "Belo Horizonte",
  },
  {
    name: "Ana Costa",
    age: 22,
    city: "Porto Alegre",
  },
  {
    name: "Carlos Pereira",
    age: 35,
    city: "Curitiba",
  },
];

let count = 0;

clients.forEach(function (client) {
  if (client.age >= 30) {
    count++;
  }
});

console.log(count);
