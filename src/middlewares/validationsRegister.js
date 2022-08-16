const {check} = require("express-validator");

const validations = [
    check("name").notEmpty().withMessage("Tienes que escribir tu nombre"),
    check("lastname").notEmpty().withMessage("Tienes que escribir tu apellido"),
    check("nickname").notEmpty().withMessage("Tienes que escribir un nombre de usuario"),
    check("email")
         .notEmpty().withMessage("Tienes que escribir un correo electronico").bail() 
         .isEmail().withMessage("Tienes que escribir un formato de correo valido"),
    check("birthday").notEmpty().withMessage("Tienes que escribir tu fecha de nacimiento"),
    check("address").notEmpty().withMessage("Tienes que escribir tu domicilio"),
    check("password").notEmpty().withMessage("Tienes que escribir una contraseña"), 
    check("password2").notEmpty().withMessage("Tienes que confirmar tu contraseña"),
    check("avatar").custom((value, { req }) => {  
        let file = req.file;
       //let acceptedExtensions = [".jpg", ".jpg", ".jpeg", ".gif"]; 
        if(!file){ 
            throw new Error("Tienes que subir una foto de usuario");
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