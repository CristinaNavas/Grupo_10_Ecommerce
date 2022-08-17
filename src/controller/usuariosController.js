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
        // buscar si el usuario ya exsite
        const resultValidation=validationResult(req);
        if (resultValidation.errors.length>0){
            return res.render("register", {
                errors: resultValidation.mapped(),
            })
        }

        /* db.Usuario.findOne({
            where:{
                email:req.body.email,
            }
        }).then ((userInDb)=>{
            console.log(userInDb)
            console.log("Repite email")
            if (userInDb){
                res.render("register",{
                    errors:{
                        email:
                        {
                            msg:"Email existente",
                        }
                    }
                })
            }
            else{
                if(req.body.password == req.body.password2){
                    
                    db.Usuario.create({
                     name: req.body.name, //En register.ejs figura nombre y apellido. Corregir.
                     lastname: req.body.lastname, //En register.ejs figura nombreUsario
                     email: req.body.email,
                     nickname:req.body.nickname,
                     birthday: req.body.birthday,
                     address: req.body.address, //figura como domicilio
                     avatar: req.file.filename,
                     password: bcryptjs.hashSync(req.body.password, 10),
                     //eliminar o ver como usar en register.ejs perfil de usuario (comprador-vendedor)
                     usersProfile_id: req.body.userProfile_id,
                    });
                    res.redirect("/usuarios/login");

                }
                else{
                    res.render("register",{
                        errors:{
                            password:
                            {
                                msg:"Password no coincide",
                            }
                        }
                    })
                }    
            }
        }) */
    },





        /* )
            
              //Corroboro que el usuario haya puesto los 2 passwords iguales
                if(req.body.pasword == req.body.pasword2){
                    
                        db.Usuario.create({
                         name: req.body.name, //En register.ejs figura nombre y apellido. Corregir.
                         lastname: req.body.lastname, //En register.ejs figura nombreUsario
                         email: req.body.email,
                         nickname:req.body.nickname,
                         birthday: req.body.birthday,
                         address: req.body.address, //figura como domicilio
                         avatar: req.file.filename,
                         password: bcryptjs.hashSync(req.body.password, 10),
                         //eliminar o ver como usar en register.ejs perfil de usuario (comprador-vendedor)
                         usersProfile_id: req.body.userProfile_id,
                     });
                            res.redirect("/usuarios/login");

            }
            else{
                alert("Las contraseñas no son iguales");
            }
    },     
             */
    
        /* const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0){
            return res.render('userRegisterForm', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } */

        // buscar si el usuario ya existe
    /*     let userInDb = Usuario.findByField('email', req.body.email);
        
        if(userInDb){
            res.render("register",{
                errors:{
                    email:
                    {
                        msg:"Password NOK",
                    }
                }
            })
        } */
        // crear el usuario entrante por el formulario
        //console.log(req.body , req.file)
/*         let userToCreate = {
            
            ...req.body,
            /* fotoUsuario: req.file, */
/*             password: bcryptjs.hashSync(req.body.password, 10),
            password2: bcryptjs.hashSync(req.body.password2, 10),
            avatar: req.file.filename    
        }
        
        let userCreated = Usuario.create(userToCreate);
        return res.redirect('/usuarios/login')
        //return res.send('Ok, las validaciones se pasaron y no tienes errores')
    }, */ 

    loginProcess: (req, res)=>{
        db.Usuario.findOne({
            where:{
                email:req.body.email,
            }
        }).then ((userLogin)=>{
            
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