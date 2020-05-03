let formulario2=document.getElementsByTagName("form")[1];
let boton=document.getElementById("btn2");
boton.addEventListener("click",operacion2);
function operacion2(e){
       let numeros= comprobar2(e);
        let seleccion=operaciones2(e);
        if(numeros&&seleccion){
            respuesta2();
            e.preventDefault();
        }
        
}
function comprobar2(e){
    if (formulario2.numer1.value==""||formulario2.numer2.value==""){
        alert("Debe ingresar ambos numeros");
        e.preventDefault();      
    }else {
        return true;
    }
    
}
function operaciones2(e){
    if(formulario2.operacionlog[0].checked==false&&
       formulario2.operacionlog[1].checked==false&&
       formulario2.operacionlog[2].checked==false&&
       formulario2.operacionlog[3].checked==false){
        alert("Debe elegir una operacion");
        e.preventDefault();
    }
    else{
        return true;
    }
}
function respuesta2(){ 
    if (formulario2.operacionlog[0].checked==true){
        document.getElementById("vacio2").innerHTML=parseInt(formulario2.numer1.value) & parseInt(formulario2.numer2.value);
        document.getElementById("vacio3").innerHTML="";
    }
    else if (formulario2.operacionlog[1].checked==true){
        document.getElementById("vacio2").innerHTML=parseInt(formulario2.numer1.value) | parseInt(formulario2.numer2.value);
        document.getElementById("vacio3").innerHTML="";
    }
    else if (formulario2.operacionlog[2].checked==true){
        document.getElementById("vacio2").innerHTML=~parseInt(formulario2.numer1.value);
        document.getElementById("vacio3").innerHTML=~parseInt(formulario2.numer2.value);
    }
    else{
        document.getElementById("vacio2").innerHTML=parseInt(formulario2.numer1.value)^parseInt(formulario2.numer2.value);
        document.getElementById("vacio3").innerHTML="";
    }
}