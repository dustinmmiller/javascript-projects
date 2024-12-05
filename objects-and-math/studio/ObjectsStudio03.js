// Code your crewMass function here:
function crewMass(arr){
  let crewTotalMass = 0;
  for (let i = 0; i < crew.length; i++){
    crewTotalMass += arr[i].mass;
  }
  return Math.round(crewTotalMass*10)/10;
}

// Code your fuelRequired function here:
function fuelRequired(arr){
  let totalMass = crewMass(arr) + 75000;
  let safetyMargin = 0;
  for (let i = 0; i < arr.length; i++){
    if (crew[i].species === 'dog' || crew[i].species === 'cat'){
      safetyMargin += 200;
    } else {
      safetyMargin += 100;
    };
  };
  return Math.ceil(9.5*(totalMass + safetyMargin));
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

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
 
 let crew = [candidateB,candidateD,candidateF];
 //only made this to give the weight without all the extra decimals from rounding fuel required
 function safetyMarginMass (arr){
  let safetyMargin2 = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i].species === 'dog' || arr[i].species === 'cat'){
      safetyMargin2 += 200;
    } else {
      safetyMargin2 += 100;
    };
  };
  return safetyMargin2;
 }
 // i am giving the total weight like it asked
console.log(`The mission has a launch mass of ${crewMass(crew) + 75000 + safetyMarginMass(crew)} kg and requires ${fuelRequired(crew)} kg of fuel.`);
//In case I wasn't supposed to take it so litearl
console.log(`The mission has a launch mass of ${(fuelRequired(crew)/9.5)} kg and requires ${fuelRequired(crew)} kg of fuel.`);