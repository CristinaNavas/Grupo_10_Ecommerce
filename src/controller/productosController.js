const fs = require('fs');
const path = require('path');
const { privateDecrypt } = require('crypto');

const { validationResult }=require("express-validator");

const productsFilePath = path.join(__dirname, '../data/productos.json');

const db = require("../database/models");
const sequelize = db.sequelize;

const controller = {
    carrito: (req,res) => {
        res.render("carrito");
    },
    productos: (req, res) => {
        db.Producto.findAll() //Usamos el alias(al alias le damos el nombre del modelo en plural).
            .then(function(productos) {
                res.render("products",{producto:productos});
            })
    }, 
    productDetail: function(req,res){
        db.Producto.findByPk(req.params.id, 
            {
                include:["categorias"]
            })
            .then(function(producto){
                res.render("productDetail", {producto:producto})
            })
    },
    productCreate: (req,res) => {
        res.render("productCreate");
    },
    productSave:(req,res) => {

        const resultValidation=validationResult(req);
        if (resultValidation.errors.length>0){
            return res.render("productCreate",{
                errors:resultValidation.mapped(),
                oldData:req.body
            })
        }
             
        db.Producto.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.file.filename,
            discount: req.body.discount,
            type: req.body.type,
            productsCategory_id: req.body.category,
 
        })
        .then((respuesta)=>{
            res.redirect("/");
        })
       
    },
    productEdit:(req,res) => {
        db.Producto.findByPk(req.params.id)
            .then(function(producto) {
                res.render('productEdit', {productToEdit:producto});
            })
        },
    productModify:(req,res) => {
        const resultValidation=validationResult(req);
        db.Producto.findByPk(req.params.id)
            .then(function(producto) {
                res.render('productEdit', {productToEdit:producto});
            })
        
        if (resultValidation.errors.length>0){
<<<<<<< HEAD
            return res.render({
                errors:resultValidation.mapped(),
                /* oldData:req.body, */
                productToEdit: producto
=======
            return res.render("productEdit",{
                errors:resultValidation.mapped(),
                oldData:req.body,
                productToEdit:req.body
>>>>>>> f0f99cffa0601767db75f3d8141a23b7e2659976
            })
        }
        
        db.Producto.update({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.file.filename,
            discount: req.body.discount,
            type: req.body.type,
            productsCategory_id: req.body.category,
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/");
    },
    destroy : (req, res) => {
        db.Producto.destroy({
            where: {
                id: req.params.id //Si le pongo la coma marca error
            } 
        })
        

        .then((result)=>{
            res.redirect("/");
        })
    },
    delete:(req,res)=>{
        res.send("Hola");
    }
}

module.exports = controller;



/* Método JSON


const controller={
  
    carrito: (req,res)=>{
        res.render("carrito");
    },
    productos: (req,res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("products",{"producto":products});
    },
    productDetail: (req,res)=>{
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productId=req.params.id;
        
        let productoDetalle=products.find(prod=>{
            return prod.id==productId;
        })
        res.render("productDetail",{"producto":productoDetalle});
    },
    productCreate:(req,res)=>{
        res.render("productCreate")
    },
    productSave:(req,res)=>{
        const resultValidation=validationResult(req);
       
        if (resultValidation.errors.length>0){
            res.render("productCreate",{errors: resultValidation.mapped(),
            })
        }

        /* let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
        let idMax=products.reduce((accumulador, currentValue)=>{
            return (accumulador.id<currentValue.id ? accumulador.id:currentValue.id )
        })
        let newProducto={
            "id":idMax+1,
            "name": req.body.name,
            "price":req.body.name,
            "description": req.body.description,
            "image": req.file.filename,
            "category ": req.body.category,
            "type": req.body.type,
            "discount": req.body.discount,
        }
        products.push(newProducto);
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null, " "))
		res.redirect("/"); 
    },
    productEdit:(req,res)=>{
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let idProducto = req.params.id;

        let productToEdit = products.find(item =>{
            return item.id == idProducto;
        });

        res.render('productEdit', {productToEdit:productToEdit})
    },
    productModify:(req,res)=>{
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
        let productoAModificar=req.params.id;

        let productoEdit= products.find(prod=>{
            return prod.id==productoAModificar;
        })
        let editedProduct={
			id: req.params.id,
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			discount: req.body.discount,
			image: req.file? req.file.filename:productoEdit.image,
			category: req.body.category
		}
        let indice=products.findIndex(product=>product.id==req.params.id)
        products[indice]=editedProduct;
  
        fs.writeFileSync(productsFilePath,JSON.stringify(products,null, " "))
		res.redirect("/");
    },
    destroy : (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let finalProducts = products.filter(product => product.id != req.params.id);
        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
        res.redirect('/');
    }
}
module.exports=controller */