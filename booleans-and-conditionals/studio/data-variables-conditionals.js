// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
let fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    console.log("ALERT: Too many astronauts!");
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    //console.log("Astronauts are ready!");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > 850000) {
    console.log("ALERT: Total mass limit exceeded!");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > -300 || fuelTempCelsius < -150) {
    //console.log("Fuel temperature is within the appropriate range.");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    //console.log("Fuel is full!");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    //console.log("Weather is clear for launch!");
}
// Verify shuttle launch can proceed based on above conditions
if (astronautCount <= 7 && astronautStatus === "ready" && totalMassKg <= 850000 && (fuelTempCelsius > -300 || fuelTempCelsius < -150) && fuelLevel === "100%" && weatherStatus === "clear") {
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
    console.log("Date: " + date + "\nTime: " + time + "\nAstronaut Count: " + astronautCount + "\nCrew Mass: " + crewMassKg + " kg\nFuel Mass: " + fuelMassKg + " kg\nShuttle Mass: " + shuttleMassKg + " kg\nTotal Mass: " + totalMassKg + " kg\nFuel Temperature: " + fuelTempCelsius + " °C\nWeather Status: " + weatherStatus + "\nHave a safe trip astronauts!");
} else {
    console.log("ALERT: Abort the launch and begin shutdown operations.");
}