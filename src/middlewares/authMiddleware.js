function authMiddleware(req,res,next){
   if (!req.session.userLogged){
      
      res.redirect("/usuarios/login");
   }

   if (req.session.userLogged.email!="admin@clavedesol.com"){
      res.redirect("/usuarios/notFound");
   }

   next();
}
module.exports=authMiddleware;