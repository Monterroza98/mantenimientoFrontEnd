import AbstractResourceClient from "./boundaries/AbstractResourceClient.js";

let arc= new AbstractResourceClient();
arc._url +="unidad";
var select= document.querySelector("#cmbUnidad");
var array= arc.findAll().then(r =>{
    return r.json();
}).then((data)=>{

    console.log(data);
    console.log(data.length);
    
    
    for (let index = 0; index < data.length; index++) {
        var opcion = document.createElement('option');
        opcion.innerText=data[index].nombre;
        select.appendChild(opcion);
    }
   
});
document.querySelector("#fecha").value = new Date();

let boton=document.querySelector("#btnIngresar");

var url2="http://localhost:8082/MantenimientoWebApp-1.0-SNAPSHOT/ws/solicitud";
boton.onclick=function(){
    console.log("entro al evento");
let solicitante=document.querySelector("#txtSolicitante").value;
let correlativo=document.querySelector("#txtCorrelativo").value;
let equipo=document.querySelector("#txtEquipo").value;
let falla=document.querySelector("#txtFalla").value;
let observaciones=document.querySelector("#txtObservaciones").value;
let fecha=document.querySelector("#fecha").value;
let unidad=document.querySelector("#cmbUnidad").selectedIndex;
let date= new Date();

document.querySelector("#uno").style.display= 'none';
document.querySelector("#ticket").style.display= 'block';
setTimeout(function(){ document.querySelector("#uno").style.display= 'block';
document.querySelector("#ticket").style.display= 'none'; }, 5000);
console.log(solicitante+","+correlativo+","+equipo+","+observaciones+","+fecha+","+unidad);
    
    fetch(url2, {  
        method: 'POST',
        headers: {'content-type':'application/json'},    
         body: JSON.stringify({
            "activo":true,"correlativo":correlativo,
            "descripcionEquipo":equipo ,"descripcionFalla":falla,
            "fechaSolicitud":date,"idUnidad":(unidad+1),
            "observaciones":observaciones,"solicitante":solicitante
      })
    }).then((res) => res.json())
    .then((data) =>   document.querySelector("#numSeg").innerText= data.idSolicitud)
    .catch((err)=>console.log(err))  
    document.querySelector("#txtSolicitante").value ="";
    document.querySelector("#txtCorrelativo").value="";
    document.querySelector("#txtEquipo").value="";
    document.querySelector("#txtFalla").value="";
    document.querySelector("#txtObservaciones").value="";  
}

let boton2=document.querySelector("#ticket");


boton2.onclick=function(){
    document.querySelector("#uno").style.display= 'block';
    document.querySelector("#ticket").style.display= 'none';

}


