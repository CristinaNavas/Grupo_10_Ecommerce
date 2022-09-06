const express = require("express");
const router = express.Router();

const usuariosController=require("../controller/usuariosController.js");

const multerMiddleware = require("../middlewares/multerMiddleware");

//Validaciones Backend
const validationsRegister = require("../middlewares/validationsRegister");
const validationsLogin = require("../middlewares/validationsLogin");


const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const validations=require("../middlewares/validationsUsers");

router.get("/login", guestMiddleware, usuariosController.login);

router.get("/register", guestMiddleware, usuariosController.register);



// sprint 5
const path = require("path");

router.get("/allUsers", usuariosController.allUsers);

router.post('/register', multerMiddleware.single("avatar"), validationsRegister, usuariosController.processRegister);

router.post("/login", validationsLogin, usuariosController.loginProcess);

router.get('/profile', usuariosController.profile);

router.get('/logout', usuariosController.logout);

router.get('/editProfile/:id/', usuariosController.editProfile);

router.post('/editProfile/:id/',multerMiddleware.single("avatar"), usuariosController.saveProfile);

router.get('/notFound', usuariosController.notFound);


/* 

router.get("/allUsers", usuariosController.allUsers)

router.post('/register', multerMiddleware.single("avatar"), validations, usuariosController.processRegister);

router.post("/login", usuariosController.loginProcess);

router.get('/profile', authMiddleware, usuariosController.profile)

router.get('/logout', usuariosController.logout)

router.get('/editProfile/:id/', usuariosController.editProfile)

router.post('/editProfile/:id/',multerMiddleware.single("avatar"), validations, usuariosController.saveProfile)

; */



module.exports=router;