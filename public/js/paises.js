console.log("hola")
const ecuador=document.querySelector("#fEcuador");
const colombia=document.querySelector("#fColombia");
const argentina=document.querySelector("#fArgentina");

const mapaE=document.querySelector("#mEcuador")
const mapaC=document.querySelector("#mColombia")
const mapaA=document.querySelector("#mArgentina")

ecuador.addEventListener("click",()=>{
    mapaE.classList.toggle("qmapstyle")
})
colombia.addEventListener("click",()=>{
    mapaC.classList.toggle("qmapstyle")
})
argentina.addEventListener("click",()=>{
    mapaA.classList.toggle("qmapstyle")
})
