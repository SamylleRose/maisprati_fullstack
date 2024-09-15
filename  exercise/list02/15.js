const transactions = [
  {
    type: "entrada",
    value: 1000.0,
  },
  {
    type: "saída",
    value: 500.0,
  },
  {
    type: "entrada",
    value: 200.0,
  },
  {
    type: "saída",
    value: 300.0,
  },
  {
    type: "entrada",
    value: 1500.0,
  },
];

let finalBalance = 0;

transactions.forEach(function (transaction) {
  if (transaction.type === "entrada") {
    finalBalance += transaction.value;
  } else {
    finalBalance -= transaction.value;
  }
});

console.log(finalBalance);
