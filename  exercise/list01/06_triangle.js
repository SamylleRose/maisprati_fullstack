const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Side A: ", function (A) {
  rl.question("Side B: ", function (B) {
    rl.question("Side C: ", function (C) {
      A = parseInt(A);
      B = parseInt(B);
      C = parseInt(C);

      if (A < B + C && B < A + C && C < A + B) {
        if (A === B && B === C) {
          console.log("Equilateral triangle");
        } else if (A !== B && B !== C && A !== C) {
          console.log("Scalene triangle");
        } else {
          console.log("Isosceles triangle");
        }
      } else {
        console.log("The provided sides do not form a triangle.");
      }

      rl.close();
    });
  });
});
