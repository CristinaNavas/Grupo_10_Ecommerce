// sprint 5
const path = require("path");
//const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs')
const User = require('../models/User');
//

const controller={
    login: (req,res)=>{
        res.render("login");
    },
    register: (req,res)=>{
        res.render("register");
    },

    allUsers: (req,res) =>{
        let allUsers = User.findAll()
        res.send(allUsers)
    },

    processRegister: (req,res) => {
      
        /* const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0){
            return res.render('userRegisterForm', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } */

        // buscar si el usuario ya exsite
        let userInDb = User.findByField('email', req.body.email);
        //res.send(userInDb);
        if(userInDb){
            res.redirect('/usuarios/login') 
           /*  {errors:
                {email:{
                    msg: "Este email ya está registrado"
                    }
                
                },
                oldData: req.body
            }) */
        }
        // crear el usuario entrante por el formulario
        //console.log(req.body , req.file)
        let userToCreate = {
            
            ...req.body,
            /* fotoUsuario: req.file, */
            password: bcryptjs.hashSync(req.body.password, 10),
            password2: bcryptjs.hashSync(req.body.password2, 10),
            //avatar: req.file.filename
            
        }
        
        res.send(userToCreate);
        let userCreated = User.create(userToCreate);
        return res.redirect('/usuarios/login')
        //return res.send('Ok, las validaciones se pasaron y no tienes errores')
    },

    loginProcess: (req, res) => {
        console.log(req.body);
        console.log('-----------------');
        let userToLogin = User.findByField('email', req.body.email);

        if(userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkThePassword){
               /*  delete userToLogin.password;
                req.session.userLogged = userToLogin;

               if(req.body.remember_user){
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
                }  */

                return res.redirect('/usuarios/allUsers');
                
                //return res.send(userToLogin);
                //return res.send('Ok puedes ingresar')
            }
            return res.render('login', 
            {errors:
                {email:{
                    msg: "Las Credenciales son inválidas"
                    }
                },
                oldData: req.body
            })
            
        }
            
        return res.render('userLoginForm', 
            {errors:
                {email:{
                    msg: "No se encuentra este Email en nuestra base de datos"
                    }
                
                },
                oldData: req.body
            })
    },

}
module.exports=controller