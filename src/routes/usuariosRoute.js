const express = require("express");
const router = express.Router();

const usuariosController=require("../controller/usuariosController.js");

const multerMiddleware = require("../middlewares/multerMiddleware");

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get("/login", guestMiddleware, usuariosController.login);

router.get("/register", guestMiddleware, usuariosController.register);



// sprint 5



router.get("/allUsers", usuariosController.allUsers)

router.post('/register', multerMiddleware.single("avatar"), usuariosController.processRegister);

router.post("/login", usuariosController.loginProcess);

router.get('/profile', authMiddleware, usuariosController.profile)

router.get('/logout', usuariosController.logout)

router.get('/editProfile/:id/', usuariosController.editProfile)

router.post('/editProfile/:id/',multerMiddleware.single("avatar"), usuariosController.saveProfile)

;



module.exports=router;