//Funcion que retorna numero mayor
function getLergerInt(number1, number2) {
    if(number1 > number2) { //Si numero 1 mayor que numero 2 entonces
      return number1 //  retorne numero 1
    } else { // sino
      return number2 //retorne numero 2
    }
  }

  var resultado =  getLergerInt(8,4); //llamado a la funcion enviando dos numeros como parametros
  console.log("El numero mayor es: "+resultado);//imprimir resultado