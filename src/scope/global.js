// variables
var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion


// Global Scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit(); //llamamos y serian 2


//ejemplo 2
function countries() {
  country = 'Colombia'; //no tiene var por lo tanto es global
  console.log(country);
}

countries();
console.log(country); //aqui esta el 2