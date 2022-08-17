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
        }else if(campoNombre.value.length < 5){
            errores.push("el campo del nombre debe contener mínimo 5 caracteres")
        }

        let campoDescripcion = document.querySelector("input#description");
        console.log(campoDescripcion);
        if(campoDescripcion.value ==""){
            errores.push("el campo del descripción tiene que estar completo")
            /* alert("el campo del número tiene que estar completo") */
        }else if(campoDescripcion.value.length < 20){
            errores.push("el campo descripción debe contener mínimo 20 caracteres")
        }

        let campoImagen = document.querySelector("input#image");
        console.log(campoImagen);
        let filePath = campoImagen.value;
        let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if(campoImagen.value ==""){
            errores.push("el campo de imagen no puede estar vacío")
            /* alert("el campo del número tiene que estar completo") */
        }else if(!allowedExtensions.exec(filePath)){
            errores.push("el campo imagen sólo admite extenciones JPG, JPEG, PNG, GIF")
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
           
        }
        else{
            formulario.submit();
        }
      
    })
})