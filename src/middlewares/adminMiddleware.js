function adminMiddleware(req,res,next){
   if (!){
        res.redirect("/usuarios/login");
   }

   next();
}
module.exports=adminMiddleware;