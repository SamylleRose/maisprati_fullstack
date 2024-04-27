const gradeOne = parseInt(prompt("Grade One: "));
const gradeTwo = parseInt(prompt("Grade Two: "));

const average = gradeOne + gradeTwo / 2;

if (average > 6) {
  console.log("PARABÉNS! você foi aprovado");
}
