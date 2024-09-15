const movies = [
  {
    title: "O Poderoso Chefão",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
  },
  {
    title: "A Origem",
    director: "Christopher Nolan",
    releaseYear: 2010,
  },
  {
    title: "Pulp Fiction: Tempo de Violência",
    director: "Quentin Tarantino",
    releaseYear: 1994,
  },
  {
    title: "Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    releaseYear: 1999,
  },
  {
    title: "Clube da Luta",
    director: "David Fincher",
    releaseYear: 1999,
  },
];

newArray = [];
movies.forEach(function (movie) {
  newArray.push(movie.title);
});

console.log(newArray);
