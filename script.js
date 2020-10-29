// Write your JavaScript code here!
window.addEventListener("load", function() {
   init();
});

   function init() {
   
      let pilotInput = document.querySelector("input[name=pilotName]");
      let form = document.querySelector("form");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");  
      let faultyItems = document.getElementById("faultyItems") 
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById('cargoStatus');
      let launchStatus = document.getElementById("launchStatusCheck");

      form.addEventListener("submit", function(event) {
         if (pilotInput.value === "" ||  copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value ==="") {
            alert("All fields are required");
               event.preventDefault();
         } else if (isNaN(pilotInput.value) === false || isNaN(copilotInput.value) === false) {
            alert("Fuel Level and Cargo Mass must be numbers.");
               event.preventDefault();
         }
         
         if (fuelLevelInput.value < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = `Not enough fuel.`;
            launchStatus.style.color = "red";
            launchStatus.innerHTML = (`Shuttle not ready for launch.`);
         } else if (cargoMassInput.value > 10000) {
            event.preventDefault();
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = `Cargo too Heavy.`;
            launchStatus.style.color = "red";
            launchStatus.innerHTML = `Shuttle not ready for launch.`;
            event.preventDefault();
         } else {
            launchStatus.style.color = "green";
            launchStatus.innerHTML = `Shuttle is ready for launch.`;
            event.preventDefault();
         }
      });    
        
            // event.preventDefault();
         /*TODO:;
          else if cargoMassInput.value is more than 10k kg
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
