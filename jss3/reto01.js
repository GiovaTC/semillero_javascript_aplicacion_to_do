function power(base, exponent) {
    var result = 1;
  
    for(var i = 0; i < exponent; i++) {
      result *= base; // Same as: result = result * base;
    }
  
    return result;
  }

  var resultado = power(3,3);
  console.log(resultado);