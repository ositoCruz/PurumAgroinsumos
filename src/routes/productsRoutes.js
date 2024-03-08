const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const { authMiddleware } = require('../middlewares/authMiddleware');

// Rutas accesibles por cualquiera
router.get('/', mainController.products);
router.get('/details/:id', mainController.detailsProduct);

// Rutas accesibles solo con login (usuarios)
router.get('/newproduct', authMiddleware, mainController.altaproducto);
router.get('/editproduct/:id', authMiddleware, mainController.editProducto); 
router.post('/producto/eliminar/:id', authMiddleware, mainController.procesarEliminar);
router.post('/productos/crear', authMiddleware, mainController.procesarCreate);

module.exports = router;
