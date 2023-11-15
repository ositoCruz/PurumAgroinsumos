const exp = require('constants');
const express = require('express');
const path = require("path");


const app = express();

app.listen(3030, () => {

console.log("Servidor funcionando")

})

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/home.html"));
  });


  app.get("/register", (req, res) => {
    res.sendFile(path.resolve("./views/register.html"));
  });

  app.get("/login", (req, res) => {
    res.sendFile(path.resolve("./views/login.html"));
  });