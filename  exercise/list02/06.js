const employees = [
  {
    name: "Carlos",
    position: "Gerente",
    salary: 5000,
  },
  {
    name: "Fernanda",
    position: "Analista",
    salary: 4000,
  },
  {
    name: "Paulo",
    position: "Desenvolvedor",
    salary: 4500,
  },
  {
    name: "Ana",
    position: "Designer",
    salary: 3800,
  },
];

for (employee of employees) {
  if (employee.salary >= 4500) {
    console.log(
      `Name: ${employee.name}, Cargo: ${employee.position}, Salario: ${employee.salary}`
    );
  }
}
