const db = require("../../database/models")
const Productos = db.Productos;
const productService = {
  getAll: async function () {
    try {
      return await db.Productos.findAll({
        include: "categoria",
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  getOne: async function (id) {
    try {
      return await db.Productos.findByPk(id, {
        include: "categoria",
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  },

  save: async (req) => {
  console.log("creando producto");
   let product= req.body;
   const image= req.file ? req.file.filename: "default-image.png";
   product.id= this.products[this.products.length -1].id +1;
   product.image= image;

   await Productos.create({
    producto_descripcion: name,
    producto_detalle: descripcion,
    categoria_id: category,
    producto_precio: price,
    producto_stock: stock,
    producto_imagen: productImage.filename // Asume que productImage.filename contiene el nombre de la imagen
});
  },












};

module.exports = productService;


/*const productos = require("../data/product.json");
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/product.json");

const productService = {
  products: JSON.parse(fs.readFileSync(productsFilePath, "utf-8")),

  getAll: function () {
    return this.products;
  },

  save: function (req) {
    console.log("creando producto");
   let product= req.body;
   const image= req.file ? req.file.filename: "default-image.png";
   product.id= this.products[this.products.length -1].id +1;
   product.image= image;
    this.products.push(product);
    fs.writeFileSync(productsFilePath, JSON.stringify(this.products), "utf-8"); 
  },

  getOne: function(id){
   let product = this.products.find((elem)=> elem.id == id);
    return product;
  }, 

  delete: function(id){
  indice= this.products.findIndex((elem)=> elem.id == id);
  this.products.splice(indice,1);
  fs.writeFileSync(productsFilePath, JSON.stringify(this.products), 'utf-8');
  },


  edit: function(data, id){
    let producto= this.getOne(id);
    let productoNuevo=data;
    //let indice = this.products.findIndex(producto => producto == id);
    producto.name= productoNuevo.name;
    producto.precio= productoNuevo.precio;
    producto.descuento= productoNuevo.descuento;
    producto.descripcion= productoNuevo.descripcion;
    producto.tipo= productoNuevo.tipo;
    //this.products[indice]= producto;
    fs.writeFileSync(productsFilePath, JSON.stringify(this.products), 'utf-8');
  }


};

module.exports = productService;
*/