console.log("hola")
const grande=document.querySelector(".carrusel_grande");
const punto=document.querySelectorAll(".carrusel_punto");

punto.forEach((cadaPunto,i)=>{
    punto[i].addEventListener("click",()=>{
        let posicion=i;
        let operacion=20*(posicion);
        console.log(operacion);
        grande.style.transform=`translateX(${-operacion}%)`;
        punto.forEach(puntoA=>{
            puntoA.classList.remove("activo");
        })
        punto[i].classList.add("activo");
    })


})