import AbstractResourceClient from "./boundaries/AbstractResourceClient.js";

var dato;
var dato2;
var seleccion;
var selector = document.querySelector("#seleccionado");
selector.addEventListener('change',
    function () {
        var up = this.options[selector.selectedIndex];
        dato = up.value;
        seleccion = dato.substr(0, 1);
        dato2 = seleccion.toUpperCase() + dato.substring(1);
        console.log(dato2);
        let arc = new AbstractResourceClient();
        arc._url += dato;
        console.log(arc._url);
        customElements.whenDefined("vaadin-grid").then(_ => {
            const tabla = document.querySelector("vaadin-grid");
            tabla.dataProvider = (params, callback) => {
                arc.findAll().then(r => {
                    return r.json();
                    console.log("Chepe Marica de a Cora");
                }).then(data => { callback(data, 5) })
            };
        })
    })

