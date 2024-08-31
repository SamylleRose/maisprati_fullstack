let weight = parseFloat(prompt("Please enter your weight in kilograms (kg):"));

let height = parseFloat(prompt("Please enter your height in meters (m):"));

let bmi = weight / (height * height);

let category;

if (bmi < 18.5) {
  category = "Underweight";
} else if (bmi >= 18.5 && bmi < 24.9) {
  category = "Normal weight";
} else if (bmi >= 25 && bmi < 29.9) {
  category = "Overweight";
} else if (bmi >= 30) {
  category = "Obesity";
} else {
  category = "Invalid BMI";
}

console.log(
  `Your BMI is ${bmi.toFixed(2)}. You are classified as: ${category}`
);
