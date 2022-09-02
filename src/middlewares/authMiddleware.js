function authMiddleware(req,res,next){
   if (!req.session.userLogged){
      
      /* res.redirect("/usuarios/login"); */
      res.redirect("/usuarios/notFound");
   }

   if (req.session.userLogged.email!="admin@clavedesol.com"){
      res.redirect("/usuarios/notFound");
   }

   next();
}
module.exports=authMiddleware;