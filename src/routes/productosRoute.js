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
const validations=require("../middlewares/validationsProducto");


// ************ Controller Require ************
const productosController=require("../controller/productosController.js");

router.get("/carrito",productosController.carrito);

router.get("/", productosController.productos);

router.get("/detail/:id",productosController.productDetail);
//Rutas crear
router.get("/create",productosController.productCreate);

router.post("/create", upload.single("image"),  validations, productosController.productSave);

//Rutas Editar
router.get("/edit/:id/",productosController.productEdit);
router.put("/edit/:id/", upload.single("image") ,validations, productosController.productModify);



//Ruta Eliminar
router.delete("/delete/:id/",productosController.destroy);

module.exports=router;