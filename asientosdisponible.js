

function asientosDisponibles(asientosDisponible, asientoSolicitado){
    let asientoEncontrado = asientosDisponible.includes(asientoSolicitado);

    return asientoEncontrado
      ? "Felicitaciones, el asiento número "+asientoSolicitado+ " está disponible"
      : "Lo sentimos, el asiento número "+asientoSolicitado+" está ocupado, pero aún quedan "+asientosDisponible.length+" asientos disponibles";
}


console.log(asientosDisponibles([15, 28, 44, 45, 70], 15))