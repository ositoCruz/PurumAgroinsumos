const fs = require('fs');
function importar(marca) {
    switch (marca) {

        case "Hot Toys":
            return JSON.parse(fs.readFileSync("./datos/figuras1.json", "utf8"));


        case "Bandai":
            return JSON.parse(fs.readFileSync("./datos/figuras2.json", "utf8"));


        case "Star Wars":
            return JSON.parse(fs.readFileSync("./datos/figuras3.json", "utf8"));

        default:
            return ('no se comercializa esa marca');
    }

   
    return figuras;
}

//console.log(importar("Hot Toys"));
//console.log(importar("Bandai"));
//console.log(importar("Star Wars"));
//console.log(importar("ACME"));
module.exports = importar;


























/*const fs = require('fs');
const path = require('path');

// Función para importar figuras por marca
function importar(marca) {
  // Validar marca
  if (!['Hot Toys', 'Bandai', 'Star Wars'].includes(marca)) {
    return [];
  }

  // Ruta al archivo JSON correspondiente a la marca
  const filePath = path.join('datos', `figuras${marca}.json`);

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const figuras = JSON.parse(data);

    // Filtrar figuras por la marca especificada
    const figurasDeMarca = figuras.filter((figura) => figura.marca === marca);

    return figurasDeMarca;
  } catch (error) {
    console.error(`Error al leer el archivo de ${marca}: ${error}`);
    return [];
  }
}

module.exports = {
  importar,
};*/