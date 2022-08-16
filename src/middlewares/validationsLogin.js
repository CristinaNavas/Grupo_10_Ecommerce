const {check} = require("express-validator");


const validations = [
    check("email")
         .notEmpty().withMessage("Tienes que escribir un correo electronico").bail() 
         .isEmail().withMessage("Tienes que escribir un formato de correo valido"),
    check("password").notEmpty().withMessage("Tienes que escribir una contraseña"), 
];

module.exports = validations; 