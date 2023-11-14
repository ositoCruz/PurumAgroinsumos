let array=[300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000];


function sumatoriaBajoImporte(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] <= 1000) {
      suma += array[i];
    }
  }
  return suma;
}

let total= sumatoriaBajoImporte(array);
console.log("total es: "+total)