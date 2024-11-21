const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let isValidStr = function(startsA) {
  if (startsA[0] !== 'a') {
    return false;
  }

  return true;
}
// TODO 2: write a validator 
// that ensures input is a vowel
let isValidVowel = function(vowel) {
  if (vowel === 'a' || vowel === 'e' || vowel === 'i' || vowel === 'o' || vowel === 'u' || vowel === 'y') {
    return true;
  }
  return false;
}
// Be sure to test your code!
console.log(getValidInput('Enter a vowel:', isValidVowel));