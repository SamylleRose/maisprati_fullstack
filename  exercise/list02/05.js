const students = [
  {
    name: "Fábio",
    gradeOne: 8.6,
    gradeTwo: 10.0,
  },
  {
    name: "Maria",
    gradeOne: 8.6,
    gradeTwo: 8.0,
  },
  {
    name: "Julio",
    gradeOne: 5.6,
    gradeTwo: 7.0,
  },
  {
    name: "Marcos",
    gradeOne: 7.6,
    gradeTwo: 9.0,
  },
];

for (student of students) {
  let avarege = (student.gradeOne + student.gradeTwo) / 2;
  console.log(`Name: ${student.name}, Avarege:`, avarege);
}
