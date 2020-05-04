let creceras=document.getElementById("crecer");
let encoger=document.getElementById("disminuir");
creceras.addEventListener("click",crecer);
encoger.addEventListener("click",disminuir);
function crecer(){
    document.getElementById('palabra').style.fontSize="40px";
    document.getElementById('palabra').style.color="red";
}
function disminuir(){
    document.getElementById('palabra').style.fontSize="20px";
    document.getElementById('palabra').style.color="blue";
}