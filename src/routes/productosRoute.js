// ************ Require's ************
const express = require("express");
const router = express.Router();
const path=require("path");

// ************ Middlewares - (don't touch) ************
const multer=require("multer");

// ************ Multer Configuration ************
const storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,path.join(__dirname,"../../public/img/main"));
    },
    filename: (req,file,cb)=>{
        cb(null,"file-"+Date.now()+path.extname(file.originalname));
    },
})
const upload= multer({storage:storage})
////************** Validacion ****************/////
const {body}=require("express-validator");

const validations=[
    body("name").notEmpty().withMessage("Ingresa el nombre del producto"),
    body("price").notEmpty().withMessage("Ingresa el precio producto"),
    body("discount").notEmpty().withMessage("Ingresa el descuento del producto"),
    body("type").notEmpty().withMessage("Selecciona el tipo del producto"),
    body("category").notEmpty().withMessage("Selecciona la categoría del producto"),
    body("description").notEmpty().withMessage("Ingresa una descripción"),
];


// ************ Controller Require ************
const productosController=require("../controller/productosController.js");

router.get("/carrito",productosController.carrito);

router.get("/", productosController.productos);

router.get("/detail/:id",productosController.productDetail);
//Rutas crear
router.get("/create",productosController.productCreate);
router.post("/create", upload.single("image"),productosController.productSave);

//Rutas Editar
router.get("/edit/:id/",productosController.productEdit);
router.put("/edit/:id/", upload.single("image"),productosController.productModify);

//Ruta Eliminar
router.delete("/delete/:id/",productosController.destroy);

module.exports=router;