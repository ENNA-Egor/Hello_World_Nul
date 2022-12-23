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
const newElement2 = document.createElement('button');
newElement.innerHTML = `Привет, всё получилось`;
newElement2.innerHTML ='Эта кнопка создана JS';
newElement2.id  = "btn_test2";
console.log (newElement2);
console.log (apElement);

(function() {
   'use strict';
   var csInterface = new CSInterface();

    document.getElementById ('btn_test').addEventListener('click', function(){
     apElement.append(newElement);
    apElement.prepend(newElement2);
      console.log("Ok");
   });
}());

(function() {
   'use strict';
   var csInterface = new CSInterface();

   document.getElementById ('btn_test2').addEventListener('click', function(){
    console.log ("Кнопка работает!!!!");
   alert ("Кнопка работает!!!!");
   });
}());
