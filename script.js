// Write your JavaScript code here!
window.addEventListener("load", function() {
   let json = [];
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then( function(json) {
         function selectRandomDestination (planetArray) {
            return Math.floor(Math.random()*planetArray.length);
         }
         const randomDestination = (selectRandomDestination(json)); 
         const missionTarget = document.getElementById("missionTarget");
            missionTarget.innerHTML = `
                  <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${json[randomDestination].name}</li>
                        <li>Diameter: ${json[randomDestination].diameter}</li>
                        <li>Star: ${json[randomDestination].star}</li>
                        <li>Distance from Earth: ${json[randomDestination].distance}</li>
                        <li>Number of Moons: ${json[randomDestination].moons}</li>
                     </ol>
                     <img src="${json[randomDestination].image}">
                     `
            });
         });
   init();
});

   function init() {
      const form = document.querySelector("form");
      const pilotInput = document.querySelector("input[name=pilotName]");
      const copilotInput = document.querySelector("input[name=copilotName]");
      const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      const cargoMassInput = document.querySelector("input[name=cargoMass]");

      // const fuelLevelInputValue = Number("fuelLevelInput.value");
      // const cargoMassInputValue = Number("cargoMassInputValue");

      const faultyItems = document.getElementById("faultyItems");
      const pilotStatus = document.getElementById("pilotStatus");
      const copilotStatus = document.getElementById("copilotStatus");
      const fuelStatus = document.getElementById("fuelStatus");
      const cargoStatus = document.getElementById('cargoStatus');
      const launchStatus = document.getElementById("launchStatus");

      function reset () {
         faultyItems.style.visibility = "hidden";
         launchStatus.innerHTML = `Awaiting Information Before Launch`;
         launchStatus.style.color = "black";
         pilotStatus.innerHTML = `Pilot Ready`
         copilotStatus.innerHTML =`Co-pilot Ready`
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
         console.log('Reset function runs');
      }

      function updateStatus () {
         if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = `Cargo too Heavy.`;
            fuelStatus.innerHTML = `Not enough fuel.`;
            cargoStatus.innerHTML = `Cargo too Heavy.`;
            launchStatus.style.color = "red";
            launchStatus.innerHTML = (`Shuttle not ready for launch.`);
            event.preventDefault();  
         } else if (fuelLevelInput.value < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = `Not enough fuel.`;
            launchStatus.style.color = "red";
            launchStatus.innerHTML = (`Shuttle not ready for launch.`);
            event.preventDefault();
         } else if (cargoMassInput.value > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = `Cargo too Heavy.`;
            launchStatus.style.color = "red";
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            event.preventDefault();
         } else {
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "green";
            launchStatus.innerHTML = `Shuttle is ready for launch.`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch.`;
            fuelStatus.innerHTML = `Fuel level high enough for launch.`;
            event.preventDefault();
         }
      }
         

      form.addEventListener("submit", function(event) {
         if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value ==="") {
            reset();
            alert("All fields are required");
            event.preventDefault();
         } else if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) { 
            reset();
            alert("Fuel Level and Cargo Mass must be numbers.");
            event.preventDefault();
         } else if (isNaN(pilotInput.value) === false || isNaN(copilotInput.value) === false) {
            reset();
            alert("Pilot and Co-Pilot must not be numbers");
            event.preventDefault();            
         } else {
            updateStatus();
         }
         pilotStatus.innerHTML = `Pilot ${pilotInput.value} Ready`
         copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} Ready`
      });    
}


