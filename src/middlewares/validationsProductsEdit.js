const {check} = require("express-validator");
const path = require('path');

const validations = [
    check("name").notEmpty().withMessage("Tienes que escribir el nombre de un producto"),
    check("price").notEmpty().withMessage("Tienes que escribir el precio del producto"),
    check("discount").notEmpty().withMessage("Tienes que escribir el porcentaje de descuento del producto"),
    check("type").notEmpty().withMessage("Tienes que elegir el tipo de producto"),
    check("category").notEmpty().withMessage("Tienes que elegir la categoría del producto"),
    check("description").notEmpty().withMessage("Tienes que escribir una descripción del producto"), 
    check("image").custom((value, { req }) => {  
        let file = req.file;
       let acceptedExtensions = [".jpg", ".jpg", ".jpeg", ".gif"]; 
        if(!file){ 
            throw new Error("Tienes que subir una foto del producto");
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}` )
            }
        }    
        return true; 
    }),
];

module.exports = validations;