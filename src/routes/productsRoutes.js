const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const createValidations= require('../middlewares/createValidations')
const adminAuthMiddleware = require("../middlewares/adminAuthMiddleware");

// Rutas accesibles por cualquiera
router.get('/', mainController.products);
router.get('/details/:id', mainController.detailsProduct);

// Rutas accesibles solo con login (usuarios)

/*ALTA DE UN PRODUCTO*/
router.get('/newproduct', authMiddleware,adminAuthMiddleware.noLoggedAdmin, mainController.altaproducto);
router.post('/', upload.single('productImage'), createValidations,authMiddleware, mainController.procesarCreate);

/*EDIT DE UN PRODUCTO*/
router.get('/editproduct/:id', authMiddleware,adminAuthMiddleware.noLoggedAdmin, mainController.editProducto); 
router.post('/editproduct/:id', upload.single('productImage'), createValidations,adminAuthMiddleware.noLoggedAdmin, mainController.procesarEdit);

router.post('/producto/eliminar/:id', authMiddleware,adminAuthMiddleware.noLoggedAdmin, mainController.procesarEliminar);
// router.get('/productList', adminAuthMiddleware.noLoggedAdmin, mainController.productsList);

/*Filtro de categorias*/
router.get('/category/:id', authMiddleware, mainController.productsList); 
module.exports = router;
