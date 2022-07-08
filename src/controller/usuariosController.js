// sprint 5
const path = require("path");
//const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs')
const User = require('../models/User');
//

const controller={
    login: (req,res)=>{
        console.log(req.session)
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
        
        if(userInDb){
            res.render("register",{
                errors:{
                    email:
                    {
                        msg:"Password NOK",
                    }
                }
            })
        }
        // crear el usuario entrante por el formulario
        //console.log(req.body , req.file)
        let userToCreate = {
            
            ...req.body,
            /* fotoUsuario: req.file, */
            password: bcryptjs.hashSync(req.body.password, 10),
            password2: bcryptjs.hashSync(req.body.password2, 10),
            avatar: req.file.filename    
        }
        
        let userCreated = User.create(userToCreate);
        return res.redirect('/usuarios/login')
        //return res.send('Ok, las validaciones se pasaron y no tienes errores')
    },

    loginProcess: (req, res)=>{
        let userToLogin=User.findByField("email", req.body.email)
        if(userToLogin){
            let isOkPassword=bcryptjs.compareSync(req.body.password,userToLogin.password)
            if (isOkPassword){
                delete userToLogin.password;
                delete userToLogin.password2;
                req.session.userLogged=userToLogin; //OK
                res.redirect("/usuarios/profile")
            }
            else{
                res.render("login",{
                    errors:{
                        password:
                        {
                            msg:"Password NOK",
                        }
                    }
                })
            }
        }else{
         res.render("login", {
            errors:{
                email:{
                    msg:"No se encuentra este email registrado",
                }
            }
         })
        }

    },

    profile: (req,res)=>{
        res.render("profile",{
            "user": req.session.userLogged,
        });
    },

    logout: (req, res) => {
        console.log("desde logouttttt")
        
        console.log(req.session.userLogged)
        if(req.session.userLogged ){

            req.session.destroy();
        return res.redirect("/");
        } else{
            res.redirect("/");
        }  
    }

}
module.exports=controller