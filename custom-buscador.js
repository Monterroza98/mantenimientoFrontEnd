import Controller from "./controller.js";
class CustomBuscador extends HTMLElement {
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
          border: 1px solid blue;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 4px;
          width: 10%;
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
    controlador.asignarTipo("solicitud/");
    let divContenido = document.createElement("div");
    let label = document.createElement("label");
    label.innerText = this.label;
    let input = document.createElement("input");
    input.setAttribute("type", "number");
    let boton = document.createElement("button");
    boton.appendChild(document.createTextNode("Buscar"));
    boton.onclick = function() {
      let ticket = input.value;
      let cuerpo = document.querySelector("#buscador");
        while (cuerpo.firstChild) {
          cuerpo.removeChild(cuerpo.firstChild);
        }
      if(ticket != ""){
        controlador.EntidadesPorId(input.value).then(function(data) {
          if (data.idSolicitud != undefined) {
          let datos = document.createElement("h3");
          datos.innerText = "Ticket: "+data.idSolicitud+"\n\nSolicitante: "+data.solicitante+"\n\nEstado: "+((data.estado) ? 'Activa' : 'Inactiva');
          cuerpo.appendChild(datos);
          }else {
          let mensaje = document.createElement("h3");
          mensaje.innerText = "Ticket inexistente";
          cuerpo.appendChild(mensaje);
        }
        });

      }else {
        let mensaje = document.createElement("h3");
        mensaje.innerText = "Ticket inválido";
        cuerpo.appendChild(mensaje);
      }
    }
    divContenido.appendChild(label);
    divContenido.appendChild(input);
    divContenido.appendChild(boton);
    this.root.appendChild(divContenido);
  }
}
customElements.define("custom-buscador", CustomBuscador);