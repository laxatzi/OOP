   //EX#12
     // Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

     {

      let funModule = (function(){
         return  {
        isCuteMixin: function(obj) {
           obj.isCute = function() {
             return true;
           }
         },
         singMixin : function(obj) {
           obj.sing = function() {
             console.log("Singing to an awesome tune");
           }
         }
  
        }
      })();
         //EX#12
     // Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.

     {

      let funModule = (function(){
         return  {
        isCuteMixin: function(obj) {
           obj.isCute = function() {
             return true;
           }
         },
         singMixin : function(obj) {
           obj.sing = function() {
             console.log("Singing to an awesome tune");
           }
         }
  
        }
      })();
      let duck = function(){};
      funModule.singMixin(duck);
      duck.sing();
       }//end block
       }//end block