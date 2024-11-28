// Code your selectRandomEntry function here:
function selectRandomEntry(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}

// Code your buildCrewArray function here:
function buildCrewArray(arrId, arrCandidates){
  let crew = [];
  for (let i = 0; i < arrCandidates.length; i++){
    for (let j = 0; j < arrId.length; j++){
      if(arrCandidates[i].astronautID === arrId[j]){
        crew.push(arrCandidates[i]);
      };
    };
  };
  return crew;
}

let candidates = [], counter = 0, isRepeat;

let idNumbers = [291, 414, 503, 599, 796, 890];
while (counter < 3){
  isRepeat = selectRandomEntry(idNumbers);
  if(!candidates.includes(isRepeat)){
    candidates.push(isRepeat);
    counter++;
  }
};
// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
// Code your template literal and console.log statements:
let spaceTravelers = buildCrewArray(candidates, animals);
console.log(`${spaceTravelers[0].name}, ${spaceTravelers[1].name}, and ${spaceTravelers[2].name} are going to space!`);