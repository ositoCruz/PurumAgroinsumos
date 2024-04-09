const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const upload= require('../src/middlewares/MulterMiddleware');
const uploadUser= require('../src/middlewares/MulterMiddleware');
const methodOverride = require("method-override");
const cors = require('cors');

const mainRoutes = require("./routes/mainRoutes");
const productsRoutes = require("./routes/productsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const apiRoutes= require("./routes/apiRoutes");

const mainController = require('./controllers/mainController');
const userCredentialsMiddleware = require("./middlewares/userCredentialsMiddleware");
const { authMiddleware, guestMiddleware, rememberMiddleware } = require('./middlewares/authMiddleware');
const { validationResult } = require('express-validator');
const createValidations = require('./middlewares/createValidations');

// Middlewares generales
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(session({
    secret: 'PurumSecreto',
    resave: false,
    saveUninitialized: true
}));

// Middleware de recordar al usuario
app.use(rememberMiddleware);

// Middleware para pasar información del usuario a todas las vistas
app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

// Middleware de credenciales de usuario
app.use(userCredentialsMiddleware);

// Rutas Estáticas
app.use(express.static(path.join('./public')));

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Rutas Principales
app.use('/', mainRoutes);

// Rutas de Productos
app.use('/products', productsRoutes);

// Rutas de API
app.use('/api', apiRoutes);

// Rutas de Usuarios
app.use('/users', usersRoutes);

// Manejo de solicitudes 404
app.use((req, res, next) => {
    res.status(404).render("error404");
    next();
});

// Inicio del Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`click para dirigirte al sitio: http://localhost:${PORT}/`);
});