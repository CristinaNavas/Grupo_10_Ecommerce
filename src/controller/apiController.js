const fs = require('fs');
const path = require('path');
const { privateDecrypt } = require('crypto');

const { validationResult }=require("express-validator");

const productsFilePath = path.join(__dirname, '../data/productos.json');

const db = require("../database/models");
const sequelize = db.sequelize;

const apiController = {

    allUsers: (req, res) => {
        db.Usuario.findAll({raw:true})
        .then(usuarios => {
            /* console.log(usuarios) */
            usuarios.forEach( user => {
                return user.detailUrl = `http://localhost:3100/api/users/${user.id}`
            })
            return res.status(200).json({
                count: usuarios.length,
                url : `http://localhost:3100/api/users`,
                users: usuarios,
          
                    
                })
            })
            //res.send(usuarios)  
    },
    oneUser: function(req,res){

        db.Usuario.findByPk(req.params.id, 
            {
                include:["profile"]
            })
            .then( usuario =>{
                return res.status(200).json({
                    data: [
                            {
                                id: usuario.id,
                                name: usuario.name,
                                lastname: usuario.lastname,
                                email: usuario.email,
                                address: usuario.address,
                                nickname: usuario.nickname,
                                birthday: usuario.birthday,
                                avatar: '/img/avatars/'+usuario.avatar,
                                url : `http://localhost:3100/api/users/${usuario.id}`,
                            }
                        
                        ]
                    })
                })
    }, 

    allProducts: (req, res) => {
        db.Producto.findAll({raw:true})
        .then(productos => {
            productos.forEach( producto => {
                return producto.detailUrl = `http://localhost:3100/api/products/${producto.id}`
            })
            let types = productos.map(item =>{
                return item.type
                });
            let uniques = [...new Set(types)]

            let vientoT = productos.filter(p => {
                return p.type == "viento"
            });
            let cuerdasT = productos.filter(p => {
                return p.type == "cuerdas"
            });
            let percusionT = productos.filter(p => {
                return p.type == "percusión"
            });
            let electricoT = productos.filter(p => {
                return p.type == "electrico"
            });

            return res.status(200).json({
                
                count: productos.length,
                url : `http://localhost:3100/api/products`,
                countByCategory: {
                    data: [
                            {viento: vientoT.length},
                            {cuerdas: cuerdasT.length},
                            {percusion: percusionT.length},
                            {electrico: electricoT.length}
                          ] 
                        },
                types: uniques,
                typeCount : uniques.length,
                productos: productos
                })
            })
            //res.send(usuarios)  
    }, 
    oneProduct: function(req,res){
        db.Producto.findByPk(req.params.id, 
            {
                include:["categorias"]
            })
            .then(function(producto){
                return res.status(200).json({
                    data : [{
                            id: producto.id,
                            name: producto.name,
                            description: producto.description,
                            price: producto.price,
                            image: producto.image,
                            urlImage: '/img/'+ producto.image,
                            discount: producto.discount,
                            type: producto.type,
                            url : `http://localhost:3100/api/products/${producto.id}`,
                            }]
                    })
            })
    },



}

module.exports = apiController;
