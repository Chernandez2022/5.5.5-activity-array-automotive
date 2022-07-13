//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle;

// //this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassangers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleServise = false;
  }

  loadPassager(num) {
    if (this.passenger < this.maximumPassangers) {
      if (num + this.passenger <= this.maximumPassangers) {
        this.passenger = num;
        return this.passenger;
      }
    }
  }

  start() {
    if (this.fuel > 0) {
      console.log("engine has fuel");
      return (this.started = true);
    } else {
      console.log("has no fuel");
      return (this.started = false);
    }
  }

  checkService() {
    if (this.mileage > 30000) {
      this.scheduleServise = true;
      return this.scheduleServise;
    }
  }
}

let myCar = new Car("mercury", "sedan", "2016", "black", 40000);

myCar.start();
myCar.loadPassager(5);
myCar.stop;
myCar.checkService;

console.log(myCar);
