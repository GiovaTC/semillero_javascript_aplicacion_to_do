function calculateAverage(numbers) {
    var sum = 0;
  
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i]; // Same as: sum = sum + numbers[i];
    }
  
    return sum / numbers.length
  }

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  promedio = calculateAverage(arreglo);

  console.log('El promedio es igual a: '+promedio);