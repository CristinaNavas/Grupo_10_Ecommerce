const express = require("express");
const router = express.Router();

const mainController=require("../controller/mainController.js");

router.get("/",mainController.main); // Del enunciado "/productos"
module.exports=router