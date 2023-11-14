const marcas = require('./collectibles');

let hotToys = marcas('Hot Toys');
let bandai = marcas('Bandai');
let starWars = marcas('Star Wars');

let unifiedCollectibles =[...hotToys, ...bandai, ...starWars];


let collectibles={
figuras: unifiedCollectibles,
 listFigures: function(){
    this.figuras.forEach(juguete => {
        console.log({...juguete});
    })
 }
};


//console.log(collectibles);
collectibles.listFigures();