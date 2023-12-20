const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/product.json');

function getProducts() {
    return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
}
function getProductById(productId) {
    // Lee el archivo JSON de productos
    const productsData = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    // Busca el producto por ID
    const product = productsData.products.find(item => item.id === parseInt(productId));
    return product;
}

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    index: (req, res) => {
        return res.render('index')
    },
    products: (req, res) => {
        // Lee el archivo JSON de productos
        const productsData = JSON.parse(fs.readFileSync('./data/product.json', 'utf-8'));
        // Pasa los datos de productos a la vista
        return res.render('products/products', { products: productsData.products });
    },
    login: (req, res) => {
        return res.render('users/login')
    },
    register: (req, res) => {
        return res.render('users/register')
    },
    carrito: (req, res) => {
        return res.render('products/carritoDeCompras')
    },
    altaproducto: (req, res) => {
        return res.render('products/createProduct');
    },
    detailsProduct: (req, res) => {
        const productId = req.params.id;
        // Aquí deberías obtener la información del producto según el productId
        const product = getProductById(productId); // Implementa esta función según tu lógica

        // Renderiza la vista productDetail.ejs y pasa el objeto del producto
        res.render('products/productDetail', { product });
    },
    editProducto: (req, res) => {
        const productId = req.params.id;
        return res.render('products/editProduct', { productId });
    },
    
    procesarCreate: (req, res) => {
        try {
            const { name, description, category, price, stock } = req.body;
            const productImage = req.file;

            // Verifica si el archivo product.json existe, si no, crea una estructura inicial
            if (!fs.existsSync(productsFilePath)) {
                const initialData = { products: [] };
                fs.writeFileSync(productsFilePath, JSON.stringify(initialData, null, 2));
            }

            // Lee el contenido actual del archivo JSON
            const productsData = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

            // Crea un nuevo objeto de producto
            const newProduct = {
                id: productsData.products.length + 1, // Asigna un ID único (puedes usar alguna lógica específica)
                name,
                description,
                category,
                price,
                stock,
                image: productImage.filename,
            };

            // Agrega el nuevo producto al array de productos
            productsData.products.push(newProduct);

            // Escribe el nuevo contenido al archivo JSON
            fs.writeFileSync(productsFilePath, JSON.stringify(productsData, null, 2));

            res.redirect('/products');
        } catch (error) {
            console.error('Error al procesar la creación del producto:', error);
            res.status(500).send('Error interno del servidor');
        }
    },

    procesarEdit: (req, res) => {
        const productId = req.params.id;
        // Lógica para actualizar el producto en la base de datos con los nuevos datos del formulario
        res.redirect('/'); // Redirigir a la lista de productos después de la edición
    },

    /*controlador para poder visualizar las pantallas*/
    edit: (req, res) => {
        return res.render('products/editProduct');
    },
    details: (req, res) => {
        return res.render('products/productDetail');
    },
}

module.exports = controller;

// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// const controller = {
// 	index: (req, res) => {
// 		const product=getProducts();
// 		const inSaleProducts= products.filter((product)=> product.category === "in-sale");
// 		const visitedProducts= products.filter((product)=> product.category === "visited");
		
// 		res.render("index", { visitedProducts, inSaleProducts })
// 	},
// 	search: (req, res) => {
// 		// Do the magic
// 	},

// 	loginController: (req,res)=>{
//         res.render(("login"))
//     },

//     registerController: (req,res)=>{
//         res.render(("register"))
//     },

//     aboutController: (req,res)=>{
//         res.render(("about"))
//     },
//     carritoDeComprasController: (req,res)=>{
//         res.render(("carritoDeCompras"))
//     },
	
	
// };
