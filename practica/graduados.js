let graduadosHTML5= '30 45 25 34 18 23 16 50 72 7';
let graduadosCSS3= '50 45 71 34 23 45 65 75 63 43 74 70';
let graduadoJAVASCRIPT= '70 65 58 45 23 57 34 17 72';
let graduadosNODEJS= '45 56 73 34 65 72 70 32';

let arrayGraduadosHtml = graduadosHTML5.split(' ');
let arrayGraduadosCss3 = graduadosCSS3.split(' ');
let arrayGraduadosJavascript = graduadoJAVASCRIPT.split(' ');
let arrayGraduadosNodejs = graduadosNODEJS.split(' ');

function calculoPromedio(listadoHtml, listadoCss3, listadoJavascript, listadoNode, curso){
    let promedio = 0;
    let total = 0;
    switch (curso) {
        case 1:
            for (i=0; i<listadoHtml.length; i++){
                total += Number(listadoHtml[i]);
            }
            promedio = total / listadoHtml.length;
            break;
        case 2:
            for (i=0; i<listadoCss3.length; i++){
                total += Number(listadoCss3[i]);
            }
            promedio = total / listadoCss3.length;
            break;
        case 3:
            for (i=0; i<listadoJavascript.length; i++){
                total += Number(listadoJavascript[i]);
            }
            promedio = total / listadoJavascript.length;
            break;
        case 4:
            for (i=0; i<listadoNode.length; i++){
                total += Number(listadoNode[i]);
            }
            promedio = total / listadoNode.length;
            break;
        default:
            return console.log("Número de curso incorrecto - Debe especificar un número de curso entre 1 y 4");
    }
    return console.log(`El promedio del curso es ${promedio}`);
}
calculoPromedio(arrayGraduadosHtml, arrayGraduadosCss3, arrayGraduadosJavascript, arrayGraduadosNodejs, 4);