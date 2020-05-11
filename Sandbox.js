// EX #7
  // Use Object.create to make two instances of Animal named duck and beagle

  {
      
   function Animal(){}; // define Animal

   Animal.prototype = {
      constructor: Animal,
      eat: function(){
         console.log('nom nom nom');
      }
   };
   function Dog(){}; // define Dog
   Dog.prototype = Object.create(Animal.prototype);

   let beagle = new Dog();
   let rocky = new Dog();

   beagle.eat();
   rocky.eat();
   
}// end block