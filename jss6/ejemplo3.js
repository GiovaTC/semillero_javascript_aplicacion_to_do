var number =12345; 12345

//var string = number.toString(); '12345'

var array = string.split; ['1','2','3','4','5']

//var array = number.toString().split('');


var arrayofNumbers =  array.map(function(number) {

    return Number(number)    
})

var arrayofNumbers2 = array.map(Number)


var sum = arrayofNumbers.reduce(function(a,b) {

    return a+b ;
},0)


console.log(number);
//console.log(string);
console.log(array);

