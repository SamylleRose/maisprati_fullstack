const company = {
  departments: [
    {
      name: "Recursos Humanos",
      employees: ["Maria Silva", "João Pereira", "Ana Souza"],
    },
    {
      name: "Tecnologia da Informação",
      employees: ["Carlos Oliveira", "Fernanda Costa", "Luiz Santos"],
    },
    {
      name: "Financeiro",
      employees: ["Patrícia Almeida", "Roberto Lima", "Juliana Mendes"],
    },
    {
      name: "Marketing",
      employees: ["Thiago Moreira", "Mariana Ferreira", "Pedro Silva"],
    },
  ],
};

for (const index in company.departments) {
  const departament = company.departments[index];

  for (const employee in departament.employees) {
    console.log(`Nome: ${employee} Employees: ${employee}`);
  }
}
