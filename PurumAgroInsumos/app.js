const express = require('express');
const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.listen(4000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});


app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carritoDeCompras.html');
});