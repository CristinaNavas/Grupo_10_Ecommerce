
const controller={
    carrito: (req,res)=>{
        res.render("carrito");
    },
    productDetail: (req,res)=>{
        res.render("productDetail");
    },
    productDetail2: (req,res)=>{
        ///Array
        const productos=[
            {
                id:1,
                precio:250,
                nombre:"Acordeón",
                oferta:"10%",
                foto: "/img/main/acordeon.png",
            },
            {
                id:2,
                precio:25,
                nombre:"Batería",
                oferta:"10%",
                foto: "/img/main/main_bateria2.png",
            },
            {
                id:3,
                precio:125,
                nombre:"Guitarra",
                oferta:"10%",
                foto: "/img/main/main_guitarra1.png",
            },
            {
                id:4,
                precio:125,
                nombre:"Trombón",
                oferta:"10%",
                foto: "/img/main/main_trombon.png",
            },
            {
                id:5,
                precio:125,
                nombre:"Platillos",
                oferta:"10%",
                foto: "/img/main/platillos.png",
            },
            {
                id:6,
                precio:125,
                nombre:"Trompeta",
                oferta:"10%",
                foto: "/img/main/trompeta.jpg",
            },
            {
                id:7,
                precio:125,
                nombre:"Violín",
                oferta:"10%",
                foto: "/img/main/main_violin.png",
            },
            {
                id:8,
                precio:125,
                nombre:"Timbal",
                oferta:"10%",
                foto: "img/main/main_timbal.png",
            },
        ]

        let productId=req.params.id;

        console.log(productId)
        let producto = productos.find(item =>{
            return item.id == productId;
        });
       
        console.log(producto);

        res.render("productDetail", {producto:producto});
    }
}
module.exports=controller