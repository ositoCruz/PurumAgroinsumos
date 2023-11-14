let tipoDeVehiculo= "compacto"
let diasDeAlquiler = 3
let sillaBebe = true

function alquilarVehiculo(tipoV, alquilarDias, sillaBebe) {

let totalPagar;

switch (tipoV) {
    case "compacto":
        totalPagar = 14000;
        break

    case "mediano":
        totalPagar = 17000;
        break

    case "camioneta":
        totalPagar = 20000;
        break
}
if (sillaBebe) {
    totalPagar + 1200;
}
return totalPagar * alquilarDias;

}


if (sillaBebe) {
   console.log("Estimado cliente: en base al tipo de vehículo: " + tipoDeVehiculo + "considerando los " + diasDeAlquiler + "dias utilizados y el asiento extra para bebes el monto total a pagar es de $"+ alquilarVehiculo(tipoDeVehiculo, diasDeAlquiler, sillaBebe));
} else {
    "Estimado cliente: en base al tipo de vehículo" + tipoDeVehiculo + "considerando los" + diasDeAlquiler + "utilizados el monto total a pagar es de $"+ alquilarVehiculo(tipoDeVehiculo, diasDeAlquiler);
}