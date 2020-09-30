const array = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
  { name: "A. Curry", profession: "kikvorsman", age: 32 },
  { name: "F. Vonk", profession: "slangenmelker", age: 36 },
  { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 },
];

for (let person of array) {
  //log alle personen
  console.log("Gehele persoon: ", person);
  // Alleen de namen
  console.log("Naam:", person.name);
  //Geboortejaar:
  console.log("Geboortejaar: ", 2020 - person.age);
  // Persoon + professie
  console.log(`${person.name} is a ${person.profession}`);

  // Ouder dan 50 jaar
  if (person.age > 50) {
    console.log("Ouder dan 50 jaar");
  }
}
