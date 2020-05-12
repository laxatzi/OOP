
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

// EX #7
  // Use Object.create to make two instances of Animal named duck and beagle. Next, modify the code so that instances of Dog inherit from Animal.

  {
      
      function Animal(){};

      Animal.prototype = {
         constructor: Animal,
         eat: function(){
            console.log('nom nom nom');
         }
      };

  }// end block



//EX#8
    // Fix the code so duck.constructor and beagle.constructor return their respective constructors
    {
      function Bird() { }
      function Dog() { }
      
      Bird.prototype = Object.create(Animal.prototype);
      Dog.prototype = Object.create(Animal.prototype);
      
      
      
      
      let duck = new Bird();
      let beagle = new Dog();
    }// end block

    
//EX#9
  // Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console.

  function Animal(){};
  Animal.prototype.eat = function(){
     console.log('nom nom nom');
  }

  function Dog(){};
  
  let beagle = new Dog();
    
//EX#10
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

  }// end block

  
//EX#11
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


  // EX#12
   // Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight 15.

   {
      function Bird() {
         this.weight = 15;
       
       }       
   } // end block