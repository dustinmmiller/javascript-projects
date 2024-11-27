let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 0,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpanzee = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superBeagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let superTardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, salamander, superChimpanzee, superBeagle, superTardigrade];
/*for (let i = 0; i < crew.length; i++){
   crew[i].move = function () {
      return Math.floor(Math.random()*11)
   };
};*/

function crewReports(obj){
   return `${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.astronautID}.`;
}

console.log(crewReports(superTardigrade));

function fitnessTest(arr){
   let results = [];
   for (let i = 0; i < arr.length; i++) {
      let steps = 0;
      let turns = 0;
      while (steps < 20){
         steps += arr[i].move();
         turns++;
      };
      results[i] = `${arr[i].name} took ${turns} turns to take 20 steps.`;
   }
   return results;
}

let raceResults = fitnessTest(crew);
for (let i = 0; i < raceResults.length; i++){
   console.log(raceResults[i]);
};
// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
