const A = parseInt(prompt("Side A: "));
const B = parseInt(prompt("Side B: "));
const C = parseInt(prompt(" Side C: "));

if (A < B + C && B < A + C && C < A + B) {
  if (A == B && B == C) {
    console.log("Equilateral triangle");
  } else if (A != B && B != C && A != C) {
    console.log("Scalene triangle");
  } else {
    console.log("Isosceles triangle");
  }
} else {
  console.log("Os lados fornecidos não formam um triângulo.");
}
