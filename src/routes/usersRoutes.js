const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const { guestMiddleware, authMiddleware } = require('../middlewares/authMiddleware');
const registerValidations= require('../middlewares/registerValidations');
// Rutas accesibles por cualquiera
router.get('/guest-route', guestMiddleware, mainController.guestRoute);
router.get('/login', guestMiddleware, mainController.login);
router.get('/register', guestMiddleware, mainController.register);

// Rutas accesibles solo con login (usuarios)
router.get('/user-route', authMiddleware, mainController.userRoute);
router.get('/profile/:username', authMiddleware, mainController.profile);
router.get('/carrito', authMiddleware, mainController.carrito);

// Otras rutas...
router.get('/logout', mainController.logout);
router.post('/user/login', mainController.procesarLogin);
router.post('/user/register', registerValidations , mainController.procesarRegister);
router.post('/producto/editar/:id', mainController.procesarEdit);

module.exports = router;