// Code your orbitCircumference function here:
function orbitCircumference(radius){
  return circumference = Math.round(2*Math.PI*radius);
}
//console.log(orbitCircumference(2000));
// Code your missionDuration function here:
function missionDuration(orbits, orbitRadius = 2000, orbitalSpeed = 28000){
  let time = orbitCircumference(orbitRadius) / orbitalSpeed;
  return Math.round((time*orbits)*100)/100;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}
console.log(`The mission will travel ${orbitCircumference(2000)*5} km around the planet, and it will take ${missionDuration(5)} hours to complete.`);

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbitalRadius, orbitalSpeed){
  let spaceWalkTime = missionDuration(3, orbitalRadius, orbitalSpeed);
  let o2Consumed = Math.round(candidate.o2Used(spaceWalkTime)*1000)/1000;
  return `${candidate.name} will perform the spacewalk, which will last ${spaceWalkTime} hours and require ${o2Consumed} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
 }
 let crew = [candidateA,candidateC,candidateE];
 /*
 This is to check all the candidates for the smallest animal to go to space instead of just the smallest crew member
 let conservationCrew = [candidateB, candidateD, candidateF].concat(crew);
 let o2ConsumptionArr = conservationCrew.map(function(n){
  let tempArr = [];
    tempArr.push(n.o2Used(1));
    return tempArr;
 });
 let leastO2Consumer = conservationCrew[o2ConsumptionArr.indexOf(findMinValue(o2ConsumptionArr))];*/

 let o2ConsumptionArr = crew.map(function(n){
  let tempArr = [];
    tempArr.push(n.o2Used(1));
    return tempArr;
 });
 let leastO2Consumer = crew[o2ConsumptionArr.indexOf(findMinValue(o2ConsumptionArr))];

 console.log(oxygenExpended(leastO2Consumer, 1000, 20000));