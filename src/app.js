const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE
app.use(express.static("public"));

/* example = require('./views/productDetail') */

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false })); // Para que se usa?? Para tomar el body y transformarlo a un objeto literal
app.use(express.json()); // Para que se usa?? Para tomar datos del body y transformarlo a un objeto literal.
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE

app.listen(3100, () => {
    console.log("Servidor corriendo en Http://localhost:3100");
  });

app.set("views",__dirname+"/views");
app.set ("view engine", "ejs");

const mainRoute=require("./routes/mainRoute.js");
const productosRoute=require("./routes/productosRoute.js");
const usuariosRoute=require("./routes/usuariosRoute.js");


app.use("/",mainRoute);

app.use("/productos",productosRoute);

app.use("/",usuariosRoute);

