const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');

const db = require("../database/models");
const sequelize = db.sequelize;

const controller={
    main: (req,res)=>{
        db.Producto.findAll() //Usamos el alias(al alias le damos el nombre del modelo en plural).
            .then(function(productos) {
                res.render("index",{producto:productos});
            })
        /* Método modelo JSON 
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productsOferta=products.filter(prod=>{
            return prod.category=="oferta";
        })
        res.render("index",{"producto":productsOferta}); */
        
    },
    quienes: (req,res)=>{
        res.render("quienes");
    },
    piano: (req, res)=>{
        res.render("piano")
    }
}
module.exports=controller