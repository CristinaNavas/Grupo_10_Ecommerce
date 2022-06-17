const fs = require('fs');
const path = require('path');
const { privateDecrypt } = require('crypto');

const productsFilePath = path.join(__dirname, '../data/productos.json');

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
module.exports=controller