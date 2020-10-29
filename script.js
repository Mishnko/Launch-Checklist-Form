// Write your JavaScript code here!
window.addEventListener("load", function() {
   init();
});

   function init() {
      let form = document.querySelector("form");
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      let fuelLevelInputValue = Number("fuelLevelInput.value");
      // let cargoMassInputValue = Number("cargoMassInputValue");

      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById('cargoStatus');
      let launchStatus = document.getElementById("launchStatus");

      form.addEventListener("submit", function(event) {
         fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
            response.json().then( function(json){
               console.log(json);
            });
         });
         if (pilotInput.value === "" ||  copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value ==="") {
            alert("All fields are required");
               event.preventDefault();
         } else if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) { 
            alert("Fuel Level and Cargo Mass must be numbers.");
               event.preventDefault();
         }
        
         pilotStatus.innerHTML = `Pilot ${pilotInput.value} Ready`
         copilotStatus.innerHTML = `Co-pilot ${copilotInput.value} Ready`

         if (fuelLevelInput.value < 10000) {
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
            faultyItems.style.visibility = "hidden";
            launchStatus.style.color = "green";
            launchStatus.innerHTML = `Shuttle is ready for launch.`;
            cargoStatus.innerHTML = `Cargo mass low enough for launch.`;
            fuelStatus.innerHTML = `Fuel level high enough for launch.`;
            event.preventDefault();
         }
      });    
        
           
         /*TODO:;
          else if cargoMassInputValue is more than 10k kg
            faultyItems = visible, cargoStatus = "cargo too heavy"
            h2LaunchStatus = "shuttle not ready for launch" & color red
         else 
*/
  
}

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
