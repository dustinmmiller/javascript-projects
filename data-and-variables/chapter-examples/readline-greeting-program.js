const input = require('readline-sync');

let name = input.question("Enter your first name: ");
let otherName = input.question("Enter your last name: ");
console.log("First name: " + name + "\nLast name: " + otherName + "\nLast, First: " + otherName + ",", name);