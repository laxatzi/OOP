
//EX#1
 //Add the own properties of canary to the array ownProps.

{
   function Bird(name) {
      this.name = name;
      this.numLegs = 2;
    }
    let canary = new Bird("Tweety");
    let ownProps = [];

}// end block


    
//EX#2
  // Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog.
  //Then add a bark() method to the Dog object so that beagle can both eat() and bark(). 
  //The bark() method should print "Woof!" to the console.

  function Animal(){};
  Animal.prototype.eat = function(){
     console.log('nom nom nom');
  }

  function Dog(){};
  
  let beagle = new Dog();
    
//EX#3
  // Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."

  {
      function Bird(){};
      Bird.prototype.fly = function() {
         return 'I am flying!';
      }

      function Penguin(){};
      Penguin.prototype = Object.create(Bird.prototype);
      Penguin.prototype.constructor = Penguin;

     
      let penguin = new Penguin();
      console.log(penguin.fly()); // Alas, this is a flightless bird.

  }// end block

  
//EX#4
  // Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.
  {

   let bird = {
      name: "Donald",
      numLegs: 2
    };
    
    let boat = {
      name: "Warrior",
      type: "race-boat"
    };
    
  }// end block


  // EX#5
   // Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.

   {
      function Bird() {
         this.weight = 15;
       
       }       
   } // end block

   //EX#6
     // Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

     {

      let isCuteMixin = function(obj) {
        obj.isCute = function() {
          return true;
        };
      };
      let singMixin = function(obj) {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      };
      
     }//end block

