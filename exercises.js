
 //EX #1
  //Create a Dog constructor. Set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties

//EX #2
  //Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, verify that it is an instance of House.

  {
   function House(numBedrooms) {
      this.numBedrooms = numBedrooms;
    }
      
   }// end block

//EX#3
 //Add the own properties of canary to the array ownProps.

{
   function Bird(name) {
      this.name = name;
      this.numLegs = 2;
    }
    let canary = new Bird("Tweety");
    let ownProps = [];

}// end block

//EX#4
  //Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.
{
   function Dog(name) {
      this.name = name;
    }
    
    Dog.prototype.numLegs = 4;
    
    let beagle = new Dog("Snoopy");
    
    let ownProps = [];
    let prototypeProps = [];

//code here

    console.log(ownProps);
    console.log(prototypeProps);
}//end block


//EX #5
 //Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object. Don't forget to define the constructor property on the Dog prototype.

 {
   function Dog(name){
      this.name = name;
   }

   
 }// end block

 //EX #6
   // check the prototype of beagle.
   {
      function Dog(name){
         this.name = name;
      }
      let beagle = new Dog('Snoopy');

   }// end of block




  
