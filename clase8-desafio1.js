// Crear un array multidimensional que contenga los nombres de los cursos y su precio en pesos: “html5, 4000”, “css3, 5000”,
// “javascript, 10000”, “react, 7000”, “nodejs, 15000”.
let preciosCurso = [
    ['html5',4000],
    ['css3',5000],
    ['javascript',10000],
    ['react',7000],
    ['nodejs',15000]
];

//Crear un array que contenga los cursos que el alumno quiere tomar con DH. Deben estar escritos en MAYÚSCULAS
// y el alumno puede seleccionar entre HTML5, CSS3, JAVASCRIPT, REACT y NODEJS.
let cursosElegidos = [];
function agregarCursos (curso){
    return cursosElegidos.push(curso);
}
agregarCursos('HTML5');
agregarCursos('CSS3');
agregarCursos('REACT');

// callback
function calcularMontoTotal(precios, cursosEligidos){
    let montoTotal = 0;
    for (let i=0; i<cursosEligidos.length; i++){
        for (j=0; j<precios.length; j++){
            if (cursosEligidos[i] == precios[j][0].toUpperCase()){
                montoTotal += precios[j][1];
            }
        }
    }
    return montoTotal;
}

// Crear otra función que reciba como parámetros el nombre y el apellido del alumno, el array multidimensional de los cursos con sus respectivos
// precios y el array que contiene qué cursos quiere hacer el alumno. Esta función tendrá la responsabilidad de retornar el nombre y el apellido del
// alumno y el monto total a pagar en función de los cursos que quiere realizar.
function presupuesto(nombre, apellido, listaprecios, cursos, calcular){
    let totalAPagar = calcular(listaprecios, cursos);
    let mensaje = '';
    console.log(`Estimado ${nombre} ${apellido} en función de los cursos seleccionados:`);
    for (let i=0; i<cursos.length; i++){
        console.log(`${i+1}.- ${cursos[i]}`);
    }
    console.log(`El monto total a pagar es de: $${totalAPagar}`);
    console.log(`Bienvenido a la gran aventura Digital House.`);
    return mensaje; 
}

let nombre = 'Carlos';
let apellido = 'Lopez';
presupuesto(nombre, apellido, preciosCurso, cursosElegidos, calcularMontoTotal);
