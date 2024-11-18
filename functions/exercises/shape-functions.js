function makeLine(size, symbol = '#') {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += symbol;
    }
    return line;
}
console.log(makeLine(4, 'x'));

/*function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size - 1; i++ ) {
        square += makeLine(size) + '\n';
    }
    square += makeLine(size);
    return square;
}
console.log(makeSquare(5));*/
function makeSquare(size, symbol = '#') {
    let square = '';
    return makeRectangle(size, size, symbol);
}
console.log(makeSquare(5, 'b'));
/*function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height - 1; i++) {
        rectangle += makeLine(width) + '\n';
    }
    rectangle += makeLine(width);
    return rectangle;
}
console.log(makeRectangle(5, 3));*/

function makeRectangle(width, height, symbol = '#') {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width, symbol) + '\n');
    }
    return rectangle.slice(0, -1);
  }

console.log(makeRectangle(5, 3, 'c'));
  //console.log(typeof(makeRectangle(1,1))); returns string

function makeDownwardStairs(height, symbol = '#') {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i + 1, symbol) + '\n');
    }
    return stairs.slice(0, -1);
}
console.log(makeDownwardStairs(5, 'd'));

function makeSpaceLine(numSpaces, numChars, symbol = '#') {
    let spaces = '';
    for (let i = 0; i < numSpaces; i++) {
        spaces += ' '
    }
    return spaces + makeLine(numChars, symbol) + spaces;
    
}
console.log(makeSpaceLine(3, 5, 'e'));

function makeIsoscelesTriangle(height, symbol = '#') {
    let triangle = '';
    for ( let i = 0; i < height; i++) {
        triangle += makeSpaceLine(height - i - 1, (2 * i + 1), symbol) + '\n';
    }
    return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5, 'f'));

function reverse(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}
function makeDiamond(height, symbol = '#') {
    return makeIsoscelesTriangle(height, symbol) + '\n' + reverse(makeIsoscelesTriangle(height, symbol)); 
}
console.log(makeDiamond(5, 'g'));