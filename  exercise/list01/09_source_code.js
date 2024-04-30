const number = parseInt(prompt("Code: "));

if (number == 1) {
  console.log("Sul");
} else if (number == 2) {
  console.log("Norte");
} else if (number == 3) {
  console.log("Leste");
} else if (number == 4) {
  console.log("Oeste");
} else if (number == 5 || number == 6) {
  console.log("Nordeste");
} else if (number == 7 || number == 8 || number == 9) {
  console.log("Sudeste");
} else if (number >= 10 && number <= 20) {
  console.log("Centro-Oeste");
} else if (number >= 25 && number <= 50) {
  console.log("Nordeste");
} else {
  console.log("Produto Importado");
}
