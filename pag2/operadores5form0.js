
        let formulario=document.getElementsByTagName("form")[0];
        formulario.addEventListener("submit",operacion);
       function operacion(e){
               let xd= comprobar(e);
                let xdd=operaciones(e);
                if(xd&&xdd){
                    respuesta();
                    e.preventDefault();
                }
                
        }
        function comprobar(e){
            if (formulario.num1.value==""||formulario.num2.value==""){
                alert("Debe ingresar ambos numeros enteros");
                e.preventDefault();      
            }else {
                return true;
            }
            
        }
        function operaciones(e){
            if(formulario.operacion[0].checked==false&&
               formulario.operacion[1].checked==false&&
               formulario.operacion[2].checked==false&&
               formulario.operacion[3].checked==false){
                alert("Debe elegir una operacion");
                e.preventDefault();
            }
            else{
                return true;
            }
        }
        function respuesta(){ 
            if (formulario.operacion[0].checked==true){
                document.getElementById("vacio").innerHTML=parseInt(formulario.num1.value) +parseInt(formulario.num2.value);
            }
            else if (formulario.operacion[1].checked==true){
                document.getElementById("vacio").innerHTML=parseInt(formulario.num1.value) -parseInt(formulario.num2.value);
            }
            else if (formulario.operacion[2].checked==true){
                document.getElementById("vacio").innerHTML=parseInt(formulario.num1.value) *parseInt(formulario.num2.value);
            }
            else{
                document.getElementById("vacio").innerHTML=parseInt(formulario.num1.value) /parseInt(formulario.num2.value);
            }
        }