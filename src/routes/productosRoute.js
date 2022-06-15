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
        console.log(file.originalname);
        cb(null,"file-"+Date.now()+path.extname(file.originalname));
    },
})
const upload= multer({storage:storage})

// ************ Controller Require ************
const productosController=require("../controller/productosController.js");

router.get("/carrito",productosController.carrito);

router.get("/products", productosController.productos);

router.get("/productDetail/:id",productosController.productDetail);
//Rutas crear
router.get("/productCreate",productosController.productCreate);
router.post("/productCreate", upload.single("image"),productosController.productSave);

//Rutas Editar
router.get("/productEdit/:id/",productosController.productEdit);
router.put("/productEdit/:id/", upload.single("image"),productosController.productModify);

//Ruta Eliminar
router.delete("/productDelete/:id/",productosController.destroy);

module.exports=router;