const autosImportados = require('./autos.js');
  
  
   let concesionaria = {
   autos: autosImportados,
 
   buscarAuto: function(patente)
   {
    for(let i=0;i<this.autos.length;i++)  {
      
      if(this.autos[i].patente===patente){
       return this.autos[i];
      }
    }
   },

   venderAuto: function (patente) {
    const autoEncontrado = this.buscarAuto(patente);
    if (autoEncontrado) {
      autoEncontrado.vendido = true;
    }
  
},

   autosParaLaVenta: function () {
    return this.autos.filter(auto => !auto.vendido);
  },

  autosNuevos: function () {
    return this.autosParaLaVenta().filter(auto => auto.km < 100);
  },

   listaDeVentas: function () {
    const autosVendidos = this.autos.filter(auto => auto.vendido);
    return autosVendidos.map(auto => auto.precio);
  },

  totalDeVentas: function () {
    const preciosDeVentas = this.listaDeVentas();
    return preciosDeVentas.reduce((total, precio) => total + precio, 0);
  },
   
 puedeComprar: function (auto, persona) {
  const costoTotalAuto = auto.precio;
  const capacidadPagoCuotas = persona.capacidadDePagoEnCuotas;
  const capacidadPagoTotal = persona.capacidadDePagoTotal;

  if (costoTotalAuto > capacidadPagoTotal) {
    // El costo total del auto supera la capacidad de pago total de la persona
    return false;
  }

  if (costoTotalAuto / auto.cuotas > capacidadPagoCuotas) {
    // El costo de las cuotas supera la capacidad de pago en cuotas de la persona
    return false;
  }
  // Si no se cumplen ninguna de las condiciones anteriores, la persona puede comprar el auto
  return true;
},

autosQuePuedeComprar: function (persona) {
    const autosParaLaVenta = this.autosParaLaVenta();

    // Filtrar la lista de autos para la venta utilizando puedeComprar
    return autosParaLaVenta.filter(auto => this.puedeComprar(auto, persona));
  }
   
}
module.exports= concesionaria   