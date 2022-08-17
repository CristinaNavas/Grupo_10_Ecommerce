window.addEventListener('load', function(){
    let formulario = document.querySelector("form");
    console.log(formulario)

    formulario.addEventListener("submit", function(e){
        e.preventDefault();

        let errores =[];

        let campoNombre = document.querySelector("input#name");
        //console.log(campoNombre);
        if(campoNombre.value ==""){
            errores.push("el campo del nombre tiene que estar completo")
            /* alert("el campo del número tiene que estar completo") */
        }else if(campoNombre.value.length < 2){
            errores.push("el campo del nombre debe contener mínimo 2 caracteres")
        }

        let campoApeliido = document.querySelector("input#lastname");
        //console.log(campoNombre);
        if(campoApeliido.value ==""){
            errores.push("el campo del apellido tiene que estar completo")
            /* alert("el campo del número tiene que estar completo") */
        }else if(campoApeliido.value.length < 2){
            errores.push("el campo del apellido debe contener mínimo 2 caracteres")
        }

       
        let campoEmail = document.querySelector("input#email");
        let emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let emailPath = campoEmail.value;
        //console.log(campoNombre);
        if(campoEmail.value ==""){
            errores.push("el campo del email tiene que estar completo")
            /* alert("el campo del número tiene que estar completo") */
        }else if(campoEmail.value.length < 2){
            errores.push("el campo del email debe contener mínimo 2 caracteres")
        }else if(!emailValid.exec(emailPath)){
            errores.push("Favor ingresar un email válido")
        }

        let campoImagen = document.querySelector("input#fotoUsuario");
        console.log(campoImagen);
        let filePath = campoImagen.value;
        let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if(campoImagen.value ==""){
            errores.push("el campo de imagen no puede estar vacío")
            /* alert("el campo del número tiene que estar completo") */
        }else if(!allowedExtensions.exec(filePath)){
            errores.push("el campo imagen sólo admite extenciones JPG, JPEG, PNG, GIF")
        }

        let campoPassword = document.querySelector("input#contraseña");
        let passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])/;
        let passwordPath = campoPassword.value;
        //console.log(campoNombre);
        if(campoPassword.value ==""){
            errores.push("el campo del password tiene que estar completo")
            /* alert("el campo del número tiene que estar completo") */
        }else if(campoPassword.value.length < 8){
            errores.push("el campo del password debe contener mínimo 8 caracteres")
        }else if(!passwordValid.exec(passwordPath)){
            errores.push("el password deberá tener letras mayúsculas, minúsculas, un número y un carácter especial")
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