// classes
// you can use the as templates 
// it is an easier way to create multiple ojbjects with the same properties 
//there is built in METHODs and you can also create METHODS of your own 

// the concept of a constructor 
// diff between methods and functions 
// when you call the class the parameters are the values in the clas (not really!! )

let assert = require("assert")

// returns a psudorandom number in the range 0 to less 1 
//.05934284 
class Car {
  //what is the efficency of this car 
  mpg; // what is the efficency of this car
  tankCapacity; // the capacity of the gas tank in gallons
  fuelLevel; //current fuel level in gallons-how much gas my car has
  id; //the id for this car
  odometer; // number of miles the car has travelled 

  // this is the constructor 
  // this method gets called, when the new instance is constrcuted 
  // another function takes in a input
  // whatever you put in the the paramater.you want to pass it 
  constructor(inputMpg, inputTankCapacity){
    // generate a random number btw 0 and 1
    // multiply the number by 10000, to shift the decimal 4 places
    // round down to get a whole number 
    let randomNumber = Math.floor((random() * 1000))
    // console.log("insde the Car constructor");
    this.id = randomNumber;

    this.tankCapacity = inputTankCapacity;
    this.mpg = inputMpg;

    this.fuelLevel = 0;
    this.odometer = 0;
  }
  // let pinto = new Car(26,11);
  // console.log("pint =>", pinto)
  
  // console.log("pinto constructed as", pinto);
  
  // pinto.mpg = 26;
  // pinto.tankCapacity = 11;
  // pinto.id = 1;
  
  // console.log("After all the properties are set",pinto);
  
  // let perla = new Car();
  // perla.mpg = 45;
  // perla.id = 2;
  // perla.tankCapacity = 12;
  
  // console.log(pinto);
  
  // console.log(perla);
  
  // write a method that will 'stimulate' fueling up
  /**
   * method will add gallons to our tank 
   * @param {*} gallons number of gallons to add
   */
  fuelUp(gallons){
    let = newGasLevel = this.fuelLevel + gallons;
   // tank level
    if (newGasLevel <= this.tankCapacity) {
      this.fuelLevel == newGasLevel;
      return this.fuelLevel;
    } else {
      return (`Gas will overfill!`)
    }
    
  }
/**
 * this method returns the number of miles this car can drive 
 * before it runs out of gas
 */

  milesToEmpty(){
// if my is 26mpg car, and it has 1 gallon 26 miles
// if my is 26mpg car, and it has 2 gallon 52 miles
//if my is 26mpg car, and it has .5 gallon 13 miles
return this.mpg * this.fuelLevel;
  }

  /**
   * Drive the car for a certain number of miles,
   * and update the fuel tank and odometer accordingly
   * @param distance: number of miles to drive
   */
  drive(distance){
    this.odometer = this.odometer + distance;
    let fuelUsed = distance / this.mpg;
    this.fuelLevel = this.fuelLevel - fuelUsed;

    //mpg; 20
    // level; 10 gallons
    // drive 40 miles
    // use; .5gallons
  }


  // our car can drive forever?? 
  // you shouldn't add more gas 
  emptyFuel() {
    if (this.fuelLevel > 0) {
      return true;
    } else {
      return false;
    }
  }
}


let pinto = new Car(26, 11); // 26 miles per gallon car 
console.log("after constructor", pinto);
pinto.fuelUp(3); // add 3 gallons of gas 
pinto.drive(13); // drive 13 miles 
// console.log(`Pinto will run out of gass in ${pinto.milesToEmpty()}" miles`)
// console.log ("after adding fuel", pinto.fuelLevel);
console.log("After driving", pinto.fuelLevel, "gallons is the amount of ")
console.log ("After adding fuel", pinto); // 2.5 gallons
console.log ("after driving odometer", pinto.odometer); // 13 miles 

pinto.addFuel(6);
pinto.drive(50);

pinto.drive(150);

pinto.drive(20);
console.log ("after adding fuel", pinto.fuelLevel); // 2.5 gallons
console.log ("after driving odometer", pinto.odometer); // 13 miles 






// properties discribes 
// method is a action and verb
// if (typeof describe == 'function'){
// describe("test set 1", function(){
//   it ("not over fill", function(){
    
//     let c1 = new Car(10,2);
//     c1.addFuel(100);

//     let expected = 2;
//     assert.equal(c1.fuelLevel, expected);

//   })
//     it("not drive past empty", function(){
//       let c2 = new Car(10,2);
//       c2.addFuel(2);
//       c2.drive(1000);

//       assert.equal(c2.odometer, 20);
//       assert.equal(c2.fuelLevel, 0);
      
  
//   })
// })


