console.log('saludos desde el front');

window.addEventListener('load', function(){
    let formulario = document.querySelector("form");
    console.log(formulario)

    formulario.addEventListener("submit", function(e){
        e.preventDefault();

        let errores =[];

        let campoEmail = document.querySelector("input#email");
        let emailValid = /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+))|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
        let emailPath = campoEmail.value;
        //console.log(campoNombre);
        if(campoEmail.value ==""){
            errores.push("el campo del email tiene que estar completo")
            
            alert("el campo del número tiene que estar completo")
        }else if(!emailValid.exec(emailPath)){
            errores.push("Favor ingresar un email válido")
        }


        let campoPassword = document.querySelector("input#password");
        //console.log(campoNombre);
        if(campoPassword.value ==""){
            errores.push("el campo del password tiene que estar completo")
            /* alert("el campo del número tiene que estar completo") */
        }



        if(errores.length > 0){
            e.preventDefault();

            let ulErrores = document.querySelector("div.errores ul");
            ulErrores.innerHTML = "";
            for(let i=0; i < errores.length; i++){
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }

            let divErrores = document.querySelector("div.errores");
            divErrores.style.color = "red";

        } else{
            formulario.submit();
        }
    })
})