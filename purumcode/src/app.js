const express = require('express');
const app = express();
const path= require("path");

const router=require('./routers/main');


const PORT= process.env.PORT || 3001;


app.use(express.static(path.join('../public')));

app.use("/", router);

app.set("view engine", "ejs");

app.listen(PORT, ()=>{
    console.log(`Servidor andando en puerto: http://localhost:${PORT}`);
});

/*app.get('/', (req,res)=>{
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
});*/
