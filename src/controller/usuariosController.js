// sprint 5
const path = require("path");
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs')
const User = require('../models/User');

const db = require("../database/models");
const sequelize = db.sequelize;

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
        db.Usuario.findOne({
            where:{
                email:req.body.email,
            }
            }).then ((userInDb)=>{
            if (userInDb){
                res.redirect("/usuarios/login");
            } else {

            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0){
                if(req.body.password.length < 8){
                    console.log(req.body.password.length);
                    res.render("register", {
                    errores: resultValidation.mapped(),
                    oldData: req.body,
                    errors:{
                        password:
                            {numberCharacters:"Tu contraseña debe tener almenos 8 caracteres."}
                    }  });
                }
                res.render("register",{
                    errores: resultValidation.mapped(),
                    oldData: req.body,
                })
                console.log("Error en las validaciones");
                    
            }
            else//{
                if(req.body.password == req.body.password2){
                    
                    db.Usuario.create({
                     name: req.body.name, 
                     lastname: req.body.lastname, 
                     email: req.body.email,
                     nickname:req.body.nickname,
                     birthday: req.body.birthday,
                     address: req.body.address, 
                     avatar: req.file.filename,
                     password: bcryptjs.hashSync(req.body.password, 10),
                     usersProfile_id: req.body.userProfile_id,
                    });
                    res.redirect("/usuarios/login");

                }
                else{
                    res.render("register",{
                        errores: resultValidation.mapped(),
                        oldData: req.body,
                        errors:{
                            password:
                                {msg:"Password no coincide"}
                        }  
                    }) 
                }    
           // }
        }
        })
    
    }, 
       
    loginProcess: (req, res)=>{
        db.Usuario.findOne({
            where:{
                email:req.body.email,
            }
        }).then ((userLogin)=>{
            /* const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0){
                
                res.render("login",{
                    errores: resultValidation.mapped(),
                    oldData: req.body,
                })
            }  */
            
            if (userLogin){
                isOkPassword=bcryptjs.compareSync(req.body.password,userLogin.password)
           
                    if (isOkPassword){
                        delete userLogin.password;
                        delete userLogin.password2;
                        req.session.userLogged=userLogin; //OK
                        res.render("profile", {user:userLogin})
                    }
                    else{
                        res.render("login",{
                            oldData: req.body,
                            errors:{
                                password:
                                {
                                    msg:"Password Incorrecto",
                                }
                            }
                        })
                    }
            }else{
                console.log("");
                 res.render("register", {
                    errors:{
                        email:{
                            msg:"No se encuentra este email registrado",
                        }
                    }
                 })
            }




        
        }
        )

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
    },
    editProfile:(req,res)=>{
        
        db.Usuario.findByPk(req.params.id)
        .then((usuario)=>{
            res.render("editarUsuario",{usuario:usuario});
        })
    },
    saveProfile: (req,res)=>{
        db.Usuario.update({
                name: req.body.name, 
                lastname: req.body.lastname, 
                email: req.body.email,
                nickname:req.body.nickname,
                birthday: req.body.birthday,
                address: req.body.address, 
                avatar: req.file.filename,
                password: bcryptjs.hashSync(req.body.password, 10),
                usersProfile_id: req.body.userProfile_id,
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/");
    },
    

}
module.exports=controller