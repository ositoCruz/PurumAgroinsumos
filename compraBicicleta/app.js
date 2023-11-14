// Importa el módulo 'datosBici'
const datosBici = require('./datosBici.js');


// Crea el objeto literal Bici
const dhBici = datosBici.obtenerBicicletas();
const bicicletaEncontrada = datosBici.buscarBici(1);



// Imprime el objeto dhBici
console.log(dhBici);    
console.log(bicicletaEncontrada);


/*const obtenerBicicletas = require("./datosBici");
const bicicletas = obtenerBicicletas(); // Llama a la funciÃ³n para obtener los datos

const dhBici = {
  bicicletas: bicicletas,
  buscarBici: (id) => {
    return bicicletas.find((bicicleta) => bicicleta.id === id) || null;
  },
  venderBici: (id) => {
    const bicicleta = dhBici.buscarBici(id);
    if (bicicleta) {
      bicicleta.vendida = "si";
      return bicicleta;
    } else {
      return "Bicicleta no encontrada";
    }
  },
  biciParaLaVenta: () => {
    return bicicletas.filter((bicicleta) => bicicleta.vendida !== "si");
  },
  totalDeVentas: () => {
    return bicicletas.reduce((total, bicicleta) => {
      if (bicicleta.vendida === "si") {
        return total + bicicleta.precio;
      }
      return total;
    }, 0);
  },
};

// Ejemplos de uso:
console.log(dhBici.buscarBici(7)); // Buscar bicicleta por ID
console.log(dhBici.venderBici(16)); // Vender bicicleta por ID
console.log(dhBici.biciParaLaVenta()); // Listar bicicletas disponibles para la venta
console.log(dhBici.totalDeVentas()); // Calcular el total de ventas
  */