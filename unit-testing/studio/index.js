const dividesByTwo = {
    codeWord: 'Launch',
    divides: function(num) {
        if(num %2 === 0){
            return true;
        }
        return false;
    }
}

const dividesByThree = {
    codeWord: 'Code',
    divides: function(num) {
        if(num %3 === 0){
            return true;
        }
        return false;
    }
}

const dividesByFive = {
    codeWord: 'Rocks',
    divides: function(num) {
        if(num %5 === 0){
            return true;
        }
        return false;
    }
}

let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(num) {
        if(dividesByTwo.divides(num)) {
            if(dividesByThree.divides(num)){
                return dividesByTwo.codeWord + dividesByThree.codeWord + '!';
            } else if (dividesByFive.divides(num)){
                return dividesByTwo.codeWord + ' ' +  dividesByFive.codeWord + '! (CRASH!!!!)';
            } else {
            return dividesByTwo.codeWord + '!';
            }
        }
        if(dividesByThree.divides(num)) {
            return dividesByThree.codeWord + '!';
        }
        if(dividesByFive.divides(num)) {
            return dividesByFive.codeWord + '!';
        }   
        return '';
    }
}

console.log(launchcode.executiveDirector);
module.exports = launchcode;

