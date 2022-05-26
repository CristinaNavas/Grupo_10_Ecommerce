const productos=[
    {
        id:1,
        precio:250,
        nombre:"Acordeón",
        oferta:"10%",
        foto: "img/main/acordeon.png",
    },
    {
        id:2,
        precio:25,
        nombre:"batería",
        oferta:"10%",
        foto: "img/main/main_bateria2.png",
    },
    {
        id:3,
        precio:125,
        nombre:"guitarra",
        oferta:"10%",
        foto: "img/main/main_guitarra1.png",
    },
]

const controller={
    main: (req,res)=>{
        res.render("index",{"producto":productos});
    }
}
module.exports=controller