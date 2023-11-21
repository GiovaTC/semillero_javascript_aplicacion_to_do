function arrayToObject(arr) {
    var obj = {};
  
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i][0]] = arr[i][1];
    }
  
    return obj;
  }
  
  // Array de pares
  var arrayPairs = [
    ["nombre", "Juan"],
    ["edad", 25],
    ["ciudad", "Bogota"],
  ];
  
  var objetoResultante = arrayToObject(arrayPairs);
  
  console.log(objetoResultante);
