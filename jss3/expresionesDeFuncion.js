//declaraciones de funciones
//function whatDoYouDo(job, name){
//
//}

// expresion de función o función anonima

var whatDoYouDo = function(job, name){
  switch (job) {
    case 'developer':
        return name + ' develops cool apps.';
    case 'designer':
        return name + ' designs awesome websites.';
    default:
        return name + ' does something else.'
  }
}

console.log(whatDoYouDo('developer', 'John Doe'));
console.log(whatDoYouDo('designer', 'Jane Doe'));
console.log(whatDoYouDo('retired', 'Marck Doe'));

var square = function(number) {
    return number * number;
}

var squareOfFour = square(4);

console.log(squareOfFour);//16

var factorial = function fac(number) {
    return number < 2 ? 1 : number * fac(number - 1)
}

console.log(factorial(5));  //120

(function(){
    var name = "John Doe dese una IIFE";
    console.log(name);
})();

//con parametros o argumentos
var LastName = "doe";

(function(lastName) {
    var firstName ="John";
    console.log(firstName + ' ' + lastName);
})('Doe desde IIFE con Argumentos o parametros');