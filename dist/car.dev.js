"use strict";

// Based on the example from the previous lesson, you can work directly in the browser or create
// separate HTML/JavaScript files – choose a more convenient option. 
// Create an object that describes a car (manufacturer, model, year of release, average speed) and 
// the following methods for working with this object:
// A method that displays the car info 
// A method for counting a time frame necessary to cover a given distance with the average speed.
// Note that every 4 hours the driver has to take a 1-hour break.
var car = {
  manufacturer: "Toyota",
  model: "Camry",
  yearOfRelease: 2023,
  averageSpeed: 120,
  displayInfo: function displayInfo() {
    console.log("Manufacturer:", this.manufacturer);
    console.log("Model:", this.model);
    console.log("Year of Release:", this.yearOfRelease);
    console.log("Average Speed:", this.averageSpeed);
  },
  timeFrame: function timeFrame(distance) {
    var journey = distance / this.averageSpeed;
    console.log(journey);
  }
};
car.displayInfo();
car.timeFrame(1000);