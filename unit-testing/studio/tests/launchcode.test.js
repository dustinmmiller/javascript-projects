// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("launchcode object has property.organization: 'nonprofit'", function() {
    let result = launchcode;
    expect(result.organization).toEqual('nonprofit');
  });

  test("launchcode object has executiveDirector: 'Jeff'", function(){
    let result = launchcode;
    expect(result.executiveDirector).toEqual('Jeff');
  });

  test("launchcode object has percentageCoolEmployees: 100", function(){
    let result = launchcode;
    expect(result.percentageCoolEmployees).toEqual(100);
  });

  test("launchcode object has programsOffered: ['Web Development', 'Data Analysis', 'Liftoff']", function() { 
    let result = launchcode;
    let arrTest = ['Web Development', 'Data Analysis', 'Liftoff'];
    for(let i = 0; i < result.programsOffered.length; i++){
      expect(result.programsOffered[i]).toEqual(arrTest[i]);
    };
    /*expect(result.programsOffered).toContain("Web Development");
    expect(result.programsOffered).toContain("Data Analysis");
    expect(result.programsOffered).toContain("Liftoff");*/
    expect(result.programsOffered.length).toEqual(3);
  });

  test("when passed a number that is ONLY divisible by 2, launchOutput() returns 'Launch!'", function(){
    let result = launchcode;
    expect(result.launchOutput(4)).toEqual('Launch!');
  });

  test("when passed a nubmer divisble by 3 launchOutput() returns 'Code!'", function() {
    let result = launchcode;
    expect(result.launchOutput(9)).toEqual('Code!');
  });

  test("when passed a nubmer divisble by 5 launchOutput() returns 'Code!'", function() {
    let result = launchcode;
    expect(result.launchOutput(5)).toEqual('Rocks!');
  });

  test("when passed a number that is divisible by 2 AND 3, launchOutput() returns 'LaunchCode!'", function() {
    let result = launchcode;
    expect(result.launchOutput(6)).toEqual('LaunchCode!');
  });

  test("when passed a number that is divisible by both 2 and 5, launchOutput() returns 'Launch Rocks! (CRASH!!!!)'", function() {
    let result = launchcode;
    expect(result.launchOutput(10)).toEqual('Launch Rocks! (CRASH!!!!)');
  });


});