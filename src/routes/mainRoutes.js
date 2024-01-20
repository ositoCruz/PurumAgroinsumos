const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const mainController = require('../src/controllers/mainController')


router.get('/', mainController.index);
router.get('/products', mainController.products);
// router.get('/search', mainController.search); 
// router.get('/about', mainController.aboutController);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/carrito', mainController.carrito);
router.get('/newproduct', mainController.altaproducto);

router.get('/details/:id', mainController.detailsProduct);
router.get('/editproduct/:id', mainController.editProducto); 

router.post('/productos/crear', mainController.procesarCreate);
router.post('/producto/editar/:id', mainController.procesarEdit);
router.post('/producto/eliminar/:id', mainController.procesarEliminar);

// Configuración de Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.resolve(__dirname, '../public/images/products' )); // Carpeta donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const fileExtension = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
  });
  const upload = multer({ storage: storage });
  app.post('/productos/crear', upload.single('productImage'), (req, res) => {
    console.log('Procesando creación de producto...');
    mainController.procesarCreate(req, res);
  });
  app.post('/producto/editar/:id', upload.single('productImage'), (req, res) => {
    console.log('Procesando edición de producto...');
    mainController.procesarEdit(req, res);
  });
  app.post('/producto/eliminar/:id', mainController.procesarEliminar);

module.exports = router;
