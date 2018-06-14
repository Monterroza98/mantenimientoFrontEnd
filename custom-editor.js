import Controller from "./controller.js";
class CustomEditor extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({mode:'closed'});
    this.root.innerHTML = `
        <style>
        label{
          font-size: 20px;
        }
        input {
          width: 50%;
          padding: 10px 20px;
          border: 1px solid gray;
          border-radius: 4px;
          background-color: white;
        }
        button{
          background-color: #e7e7e7;
          color: blue;
          text-align: center;
          border: 1px solid blue;
          padding: 10px 25px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 4px;
          width: 12%;
        }
        button:hover {
          background-color: white;
        }
        </style>
        `
  }

  get label(){
    return this.getAttribute("label");
  }

  get tipo() {
    return this.getAttribute("tipo");
  }

  connectedCallback(){
    let controlador = new Controller();
    var fecha, observaciones, idSol, idUn;
    controlador.asignarTipo("orden/");
    let url="http://localhost:8082/MantenimientoWebApp-1.0-SNAPSHOT/ws/orden";
    let divContenido = document.createElement("div");
    let label = document.createElement("label");
    label.innerText = this.label;
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    let boton = document.createElement("button");
    boton.appendChild(document.createTextNode("Buscar"));
    let boton1 = document.createElement("button")
    boton1.appendChild(document.createTextNode("Finalizar Orden"));
    boton.onclick = function() {
      let ticket = input.value;
      let cuerpo = document.querySelector("#buscador");
        while (cuerpo.firstChild) {
          cuerpo.removeChild(cuerpo.firstChild);
        }
      if(ticket != ""){
          controlador.EntidadesPorId(input.value).then(function(data) {
          if (data.idOrden != undefined) {
          let datos = document.createElement("h3");
          datos.innerText = "Identificador: "+data.idOrden+"\n\nFecha: "+
          data.fecha+"\n\nEstado: "+((data.activo) ? 'Activa' : 'Inactiva');
          cuerpo.appendChild(datos);
          }else {
          let mensaje = document.createElement("h3");
          mensaje.innerText = "Orden inexistente";
          cuerpo.appendChild(mensaje);
        }
        });

      }else {
        let mensaje = document.createElement("h3");
        mensaje.innerText = "Orden inválida";
        cuerpo.appendChild(mensaje);
      }
    
    }
    divContenido.appendChild(label);
    divContenido.appendChild(input);
    divContenido.appendChild(boton);
    divContenido.appendChild(boton1);
    this.root.appendChild(divContenido);

    boton1.onclick = function() {
        controlador.EntidadesPorId(input.value).then(function(data) {
        if (data.idOrden != undefined) {
        let id = input.value;
        fecha=data.fecha;
        observaciones=data.observaciones;
        idSol=data.idSolicitud;
        idUn=data.idUnidad;
                    
        fetch(url, {  
            method: 'PUT',
            headers: {'content-type':'application/json'},    
             body: JSON.stringify({
                "activo":false,"idOrden":id,"fecha": fecha,"observaciones":observaciones,
                "idSolicitud":idSol,"idUnidad":idUn
          })
        }).then(function (data) {  
            console.log('Request success: ', data);  
          })  
          .catch(function (error) {  
            console.log('Request failure: ', error);  
          });
    }
});
setTimeout(function(){ location.reload(true);}, 1000);

    };
  }
}
customElements.define("custom-editor", CustomEditor);