//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore);
    }
    average(){
        let result = 0;
        for (let i = 0; i <this.scores.length; i++){
            result += this.scores[i];
        }
        result = result/this.scores.length;
        return Math.round(result*10)/10;
    }
    status(){
        let temp = this.average();
        if(temp >= 90){
            return 'Accepted';
        } else if(temp >= 80){
            return 'Reserve';
        } else if(temp >= 70){
            return 'Probationary';
        } else {
            return 'Rejected';
        }
    }
}

let candidateOne = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let candidateTwo = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let candidateThree = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
console.log(candidateOne, candidateThree, candidateTwo);
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
candidateOne.addScore(83);
console.log(candidateOne.scores);
console.log(candidateTwo.average());
console.log(`${candidateOne.name} earned an average test score of ${candidateOne.average()}% and has a status of ${candidateOne.status()}.`);
console.log(`${candidateTwo.name} earned an average test score of ${candidateTwo.average()}% and has a status of ${candidateTwo.status()}.`);
console.log(`${candidateThree.name} earned an average test score of ${candidateThree.average()}% and has a status of ${candidateThree.status()}.`);
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let testsForReserve = 0;
while (candidateThree.status() !== 'Reserve'){
    candidateThree.addScore(100);
    testsForReserve++;
};
console.log(`It will take at least ${testsForReserve} tests to boost Glad Gator's status to Reserve or higher.`);
while (candidateThree.status() !== 'Accepted'){
    candidateThree.addScore(100);
    testsForReserve++;
}
console.log(`It will take at least ${testsForReserve} tests to boost Glad Gator's status to Accepted.`);