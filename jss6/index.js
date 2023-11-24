// Ejemplo de codigo imperativo
var numbers  =[1,2,3,4,5];
var doubles = [];

for(var i=0; i < numbers.length; i++) {
    doubles.push(numbers[i] * 2);
}

console.log(numbers);
console.log(doubles);

var numbersD  =[1,2,3,4,5];

var doublesD = numbers.map(function(numberD) {
    return numberD * 2;
});

console.log(numbersD);
console.log(doublesD);

//Funciones puras
/*Para que una función pueda ser considerada pura debe cumplir dos reglas:
El valor retornado siempre es el mismo cuando se da el mismo valor de entrada.
No debe producir side effects (efectos secundarios).
Los side effects son un término más amplio que el anterior. A grandes rasgos significa modificar algo fuera de la función. Algunos ejemplos:
Mutar los parámetros que recibe una función como en el Ejemplo 1.
Modificar cualquier variable fuera de la función.
Llamadas a una API.*/
//Funcion Pura

function add(a,b) {
    return a+b;
}

add(1,2)  //3

//Funcion Inpura
function randomNumber() {
    return Math.floor(Math.random() * 10);
}