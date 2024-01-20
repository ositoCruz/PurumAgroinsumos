const express = require('express');
const app = express();

const path = require('path');
const mainRoutes = require('./routes/mainRoutes');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.use('/', mainRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`click para dirigirte al sitio: http://localhost:${PORT}/`);
});