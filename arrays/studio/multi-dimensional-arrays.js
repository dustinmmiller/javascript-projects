let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(',').sort();
equipment = equipment.split(',').sort();
pets = pets.split(',').sort();
sleepAids = sleepAids.split(',').sort();
//console.log(food, equipment, pets, sleepAids);
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [food, equipment, pets, sleepAids];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let num1 = Number(input.question("Please select a cabinet in the cargoHold numbered 0 - 3: "));
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (num1 !== 0 && num1 !== 1 && num1 !== 2 && num1 !== 3) {
    console.log("Error: please select a cabinet: 0, 1, 2, or 3.");
} else {
    console.log(`The contents of cabinet ${num1} are: ${cargoHold[num1]}`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let contents = input.question(`Please select an item from cabinet ${num1}: ` );
let doesItContain = "DOES NOT";
if (cargoHold[num1].includes(contents)) {
    doesItContain = "DOES";
}
console.log(`Cabinet ${num1} ${doesItContain} contain ${contents}."`);