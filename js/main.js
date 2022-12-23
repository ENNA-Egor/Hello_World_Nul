/*(function() {
   'use strict';
   var csInterface = new CSInterface();

   document.getElementById ('btn_test').addEventListener('click', function(){
      csInterface.evalScript('sayHello()');
      console.log("Ok");
   });
}());*/

const apElement = document.querySelector('#content');

const newElement = document.createElement('div');
newElement.innerHTML = `Привет, всё получилось`;
console.log (newElement);
console.log (apElement);



(function() {
   'use strict';
   var csInterface = new CSInterface();

   document.getElementById ('btn_test').addEventListener('click', function(){
     apElement.after(newElement);
      console.log("Ok");
   });
}());
