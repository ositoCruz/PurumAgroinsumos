var cursos = [
    ["HTML5", 4000],
    ["CSS3", 5000],
    ["JavaScript", 10000],
    ["React", 7000],
    ["Nodejs", 15000]
];

const mensaje=''
var cursosDeseadosAlumno = ["HTML5", "CSS3", "JAVASCRIPT", "NODEJS"];

function calcularMontoTotal(cursos, cursosDeseados) {
    let total = 0;
    for (let i = 0; i < cursosDeseados.length; i++) {
        for (let j = 0; j < cursos.length; j++) {

            let nombre=cursos[j][0].toUpperCase();
            let precio= cursos[j][1];
            if (nombre=== cursosDeseados[i]) {
                total += precio;
              //  mensaje+= concat(" "+i+"- ", cursosDeseados[i]);
                
            }
        }
    }
    return total;
}

var aux = calcularMontoTotal(cursos, cursosDeseadosAlumno);
console.log(aux);



function obtenerInfoAlumno(nombre, apellido, cursos, cursosDeseados) {
    let montoTotal = calcularMontoTotal(cursos, cursosDeseados);
    // return `Estimado ${nombre} ${apellido}, en funcion de los cursos seleccionados \n ${cursosDeseados} \n El monto total a pagar es de: $${montoTotal} \n Bienvenidos a la gran aventura de Digital House`;
    console.log(`Estimado ${nombre} ${apellido}, en funcion de los cursos seleccionados: `);
    for (let i = 0; i < cursosDeseados.length; i++) {
        console.log(`${i+1}. ${cursosDeseados[i]}`);
    }
    console.log(`El monto total a pagar es de: $${montoTotal} 
    Bienvenidos a la gran aventura de Digital House`);
}
const infoAlumno = obtenerInfoAlumno("Matias", "Perez", cursos, cursosDeseadosAlumno);
console.log(infoAlumno);