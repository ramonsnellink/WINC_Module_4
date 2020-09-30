// A Schrijf een JavaScript functie die een bepaald item weet te vinden en terug geeft op basis van een bepaalde value.
// Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

// Hier komt jouw functie

const findSpiderMan = (superheroes) => {
  return superheroes.find((superhero) => superhero.name === "Spiderman");
};

console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// B In een array met integers. Zorg dat je een array returned met de integers verdubbeld. Gebruik de .forEach method of, een level hoger: de .map method.

// FIXEN
const doubleArrayValues = (array) => {
  return array.map((arrayItem) => {
    return Number.isInteger(arrayItem);
  });
};

console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]
