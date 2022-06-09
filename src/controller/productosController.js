const fs = require('fs');
const path = require('path');
const { privateDecrypt } = require('crypto');

const productsFilePath = path.join(__dirname, '../data/productos.json');

const controller={
    carrito: (req,res)=>{
        res.render("carrito");
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
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
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
    }
}
module.exports=controller