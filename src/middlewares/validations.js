path=require("path");
const {body} =require("express-validator");
const validations=[
    body("name").notEmpty().withMessage("Ponga el nombre"),
    body("email").notEmpty().withMessage("Ponga email").bail().isEmail().withMessage("Ingresa un verdadero email"),
    body("password").notEmpty().withMessage("Ponga contraseña"),
    body("country").notEmpty().withMessage("Seleccione país"), 
    body("avatar").custom((value,{req})=>{
        let file=req.file;
        let extensionsOK=[".jpg",".png",".gift"];
        if (!file){
            throw new Error("Sube imagen");
        }
        else{
            let extensionAvatar=path.extname(file.originalname);
            if (!extensionsOK.includes(extensionAvatar)){
                throw new Error("Extensión no permitida");
            }
        }
        return true;
    })
]
module.exports=validations