let book = {
  title: "pequeno principe",
  author: "Antoine de Saint-Exupéry",
  yearPublished: "1943",
  gender: "Literatura Infatil",
};

let propertyCheck = "publisher";
let propertyExists = false;

for (let property in book) {
  if (property === propertyCheck) {
    propertyExists = true;
  }
}

if (propertyExists) {
  console.log("Propriedade existe!");
} else {
  console.log("Propriedade adicionada!");
  book.publisher = "HarperCollins Brasil";
}
