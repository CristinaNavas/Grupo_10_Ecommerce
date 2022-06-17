const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productos.json');


const controller={
    main: (req,res)=>{
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let productsOferta=products.filter(prod=>{
            return prod.category=="oferta";
        })
        res.render("index",{"producto":productsOferta});
    }
}
module.exports=controller