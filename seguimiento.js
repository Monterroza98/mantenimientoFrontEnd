document.querySelector("#dos").style.display= 'none';
document.querySelector("#tres").style.display= 'none';
var tabla=document.querySelector("#tabla");
var objeto;

let boton=document.querySelector("#btnFin");
boton.onclick=function(){
    objeto=tabla.getSelectedItems;
    console.log("si entra");
}