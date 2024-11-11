let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas(input) {
	//TODO: 1. create and instantiate your variables.
	let check = input;
	let output = 'This has no commas!';
	//TODO: 2. write the code required for this step
	if (check.includes(',')) {
		output = check.split(',');
		output.reverse();
		output = output.join(',');
	}
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}
//console.log(reverseCommas(protoArray1), reverseCommas(protoArray2));
//3)
function semiDash(input) {
	let check = input;
	let output = "This has no semicolons!";
//TODO: write the code required for this step
	if (check.includes(';')) {
		output = check.split(';');
		output.sort();
		output = output.join('-');
	}
  
	return output;
}
//console.log(semiDash(protoArray1), semiDash(protoArray2));
//4)
function reverseSpaces(input) {
	let check = input;
	let output = "This string has no spaces!";
  //TODO: write the code required for this step
	if ( check.includes(' ')) {
		output = check.split(' ');
		output.sort().reverse();
		output = output.join(' ');
	}
	return output;
}
//console.log(reverseSpaces(protoArray1), reverseSpaces(protoArray2), reverseSpaces(protoArray3));
//5)
function commaSpace(input) {
	let check = input;
	let output = "This string doesn't use 'comma spaces'!";
	//TODO: write the code required for this step
	if (check.includes(', ')) {
		output = check.split(', ');
		output.reverse();
		output = output.join(',');
	}
	return output;
}
//console.log(commaSpace(protoArray1), commaSpace(protoArray2), commaSpace(protoArray3), commaSpace(protoArray4));
// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
