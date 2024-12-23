// Write your JavaScript code here.
function init () {
    const button = document.getElementById("takeoff");
    const paragraph = document.getElementById("flightStatus");
    const shuttleBackDrop = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    const land = document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    let rocketShip = document.getElementById("rocket");
    const move = 10;
    rocketShip.style.position = "absolute";
    const rocketLeft = (shuttleBackDrop.offsetWidth - rocketShip.offsetWidth) / 2;
    const rocketTop = (shuttleBackDrop.offsetHeight - rocketShip.offsetHeight);
    rocketShip.style.left = rocketLeft + "px";
    rocketShip.style.top = rocketTop + "px";
    let takeOffClearance = false;

    button.addEventListener("click", function (event) {
        let answer = confirm("Confirm that the shuttle is ready for takeoff.");
        if (answer) {
            paragraph.innerHTML = "Shuttle in flight.";
            shuttleBackDrop.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
            takeOffClearance = true;
        }
    });

    land.addEventListener("click", function (event) {
        alert("The shuttle is landing. Landing gear engaged.");
        paragraph.innerHTML = "The shuttle has landed.";
        shuttleBackDrop.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocketShip.style.left = rocketLeft + "px";
        rocketShip.style.top = rocketTop + "px";
        takeOffClearance = false;
    });

    abortMission.addEventListener("click", function (event) {
        let response = confirm("Confirm that you want to abort the mission.");
        if (response) {
            paragraph.innerHTML = "Mission aborted.";
            shuttleBackDrop.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocketShip.style.left = rocketLeft + "px";
            rocketShip.style.top = rocketTop + "px";
            takeOffClearance = false;
        }
    });

    upButton.addEventListener("click", function (event) {
        let temp = parseInt(shuttleHeight.innerHTML);
        let otherTemp = parseInt(rocketShip.style.top);
        if (otherTemp > 0 && takeOffClearance === true) {
            temp += 10000;
            shuttleHeight.innerHTML = temp;
            rocketShip.style.top = (otherTemp - move) + "px";
        }
    });

    downButton.addEventListener("click", function (event) {
        let temp = parseInt(shuttleHeight.innerHTML);
        let otherTemp = parseInt(rocketShip.style.top);
        if (otherTemp < rocketTop && takeOffClearance === true) {
            temp -= 10000;
            shuttleHeight.innerHTML = temp;
            rocketShip.style.top = (otherTemp + move) + "px";
        }
    });

    rightButton.addEventListener("click", function (event) {
        let temp = parseInt(rocketShip.style.left);
        if (temp < rocketLeft*2 && takeOffClearance === true){
            rocketShip.style.left = (temp + move) + "px";
        }
    });

    leftButton.addEventListener("click", function (event) {
        let temp = parseInt(rocketShip.style.left);
        if (temp > 0 && takeOffClearance === true){
            rocketShip.style.left = (temp - move) + "px"; 
        }
    });
}
// Remember to pay attention to page loading!
window.addEventListener("load", init);