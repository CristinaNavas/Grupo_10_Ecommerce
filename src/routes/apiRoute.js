// ************ Require's ************
const express = require("express");
const router = express.Router();
const path=require("path");


// ************ Controller Require ************
const apiController = require("../controller/apiController.js");


// rutas API Usuarios
router.get("/users", apiController.allUsers);
router.get("/users/:id", apiController.oneUser);


// rutas API Productos
router.get("/products",apiController.allProducts);
router.get("/products/:id",apiController.oneProduct);

module.exports=router;