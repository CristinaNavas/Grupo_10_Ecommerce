const express = require("express");
const router = express.Router();

const usuariosController=require("../controller/usuariosController.js");

const multerMiddleware = require("../middlewares/multerMiddleware")

router.get("/login",usuariosController.login);

router.get("/register",usuariosController.register);



// sprint 5
router.get("/allUsers", usuariosController.allUsers)

router.post('/register', usuariosController.processRegister);

router.post("/login",usuariosController.loginProcess);


module.exports=router;