const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`click para dirigirte al sitio: http://localhost:${PORT}/`);
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});


app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carritoDeCompras.html')});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/details', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

//pude hacer un commit y les voy a comprar un helado a los profes que me ayudaron
