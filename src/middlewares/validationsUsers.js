path=require("path");
const {body} =require("express-validator");
const validations=[
    body("name").notEmpty().withMessage("Ingresa el nombre"),
    body("lastname").notEmpty().withMessage("Ingresa el apellido"),
    body("nickname").notEmpty().withMessage("Ingresa el alias"),
    body("email").notEmpty().withMessage("Ingresa el mail"),
    body("birthday").notEmpty().withMessage("Ingrese su fecha de nacimiento"),
    body("address").notEmpty().withMessage("Ingrese la dirección"),
    body("userProfile_id").notEmpty().withMessage("Ingrese el perfil de usuario"),
    body("password").notEmpty().withMessage("Ingresa la contraseña"),
    body("password2").notEmpty().withMessage("Repita la contraseña"),
    body("avatar").custom((value,{req})=>{
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