const express = require("express");
const router = express.Router();

const productosController=require("../controller/productosController.js");

router.get("/carrito",productosController.carrito);

router.get("/productDetail",productosController.productDetail);

module.exports=router;