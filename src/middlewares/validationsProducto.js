path=require("path");
const {body} =require("express-validator");
const validations=[
    body("name").notEmpty().withMessage("Ingresa el nombre del producto"),
    body("price").notEmpty().withMessage("Ingresa el precio producto"),
    body("discount").notEmpty().withMessage("Ingresa el descuento del producto"),
    body("type").notEmpty().withMessage("Selecciona el tipo del producto"),
    body("category").notEmpty().withMessage("Selecciona la categoría del producto"),
    body("description").notEmpty().withMessage("Ingresa una descripción"),
    body("image").custom((value,{req})=>{
        let file=req.file;
        let acceptedExtensions=[".jpg",".png",".gift"];
        
        if (!file){
            throw new Error("Tienes que subir una imagen");
        }else{
            let fileExtension=path.extname(file.originalname);
            console.log(fileExtension);
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error("Las extensiones admitidas son .jpg, .png, .gift");
            }
        }
        return true;
    })
];
module.exports=validations