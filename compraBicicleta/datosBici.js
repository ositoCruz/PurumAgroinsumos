// Importa el módulo 'fs' (File System)
const fs = require('fs')
// Define una función para leer el archivo 'bicicletas.json' y devolver su contenido
function obtenerBicicletas() {
   
  try {
    // Lee el contenido del archivo 'bicicletas.json' de forma sincrónica
    const contenido = fs.readFileSync('bicicletas.json', 'utf8');

    // Parsea el contenido JSON a un objeto JavaScript
    const bicicletas = JSON.parse(contenido);

    return bicicletas;
  } catch (error) {
    console.error('Error al leer el archivo bicicletas.json:', error);
    return [];
  }
}

function buscarBici(id) {
    // Obtiene la lista de bicicletas
    const bicicletas = obtenerBicicletas();
  
    // Utiliza el método filter para encontrar la bicicleta por su ID
    const bicicletaEncontrada = bicicletas.filter((bicicleta) => bicicleta.id === id);
  
    // Si se encontró una bicicleta, devuélvela; de lo contrario, devuelve null
    return bicicletaEncontrada.length > 0 ? bicicletaEncontrada[0] : null;
  }





// Exporta la función para que esté disponible para su uso en otros archivos
module.exports = {
  obtenerBicicletas,
  buscarBici,
  };
