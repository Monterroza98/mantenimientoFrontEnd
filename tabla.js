import AbstractResourceClient from "./boundaries/AbstractResourceClient.js";

        
        let arc = new AbstractResourceClient();
        arc._url += "agregar entidad a probar";
        customElements.whenDefined("vaadin-grid").then(_ => {
            const tabla = document.querySelector("vaadin-grid");
            tabla.dataProvider = (params, callback) => {
                arc.findAll().then(r => {
                    return r.json();
                    console.log("Chepe Marica de a Cora");
                }).then(data => { callback(data, 5) })
            };
        })
        

