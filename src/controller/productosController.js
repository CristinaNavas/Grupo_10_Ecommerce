const controller={
    carrito: (req,res)=>{
        res.render("carrito");
    },
    productDetail: (req,res)=>{
        res.render("productDetail");
    }
}
module.exports=controller