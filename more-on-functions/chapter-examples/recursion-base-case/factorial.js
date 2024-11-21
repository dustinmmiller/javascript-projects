//The following concept check assumes that only positive integers are passed to the function.

function factorial(integer) {
  if (integer === 1){
    return integer;
  } else {
    return integer*(factorial(integer-1));
  }
}

function isValidInput (integer) {
  if (isValidStr(integer) === true || isValidDecimal(integer) === true || isValidNegative(integer) === true) {
    return "Error please enter a positive whole number that is not a string!";
  }
  return factorial(integer);
}

let isValidStr = function(str) { 
  if (typeof str === 'string') {
    console.log(`${str} is a string. `);
    return true;
  }
  return false;
};
let isValidDecimal = function(decimal) {
  if (Number.isInteger(decimal) === false) {
    console.log(`${decimal} is a decimal. `);
    return true;
  }
  return false;
};

let isValidNegative = function(negative) {
  if (negative <= 0) {
    console.log(`${negative} is a number equal to or less than 0). `);
    return true;
  } 
  return false
};
console.log(factorial(4));
console.log(isValidInput(0));

//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.
