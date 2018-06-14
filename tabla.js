
import AbstractResourceClient from "./boundaries/AbstractResourceClient.js";
        let arc = new AbstractResourceClient();
        arc._url +="orden/activa";
        customElements.whenDefined("vaadin-grid").then(_ => {
            const tabla = document.querySelector("#tabla");
            tabla.dataProvider = (params, callback) => {
                arc.findAll().then(r => {
                    return r.json();
                    console.log("Chepe Marica de a Cora");
                }).then(data => { callback(data, data.length )})
            };
        })
        
        let arc2 = new AbstractResourceClient();
        arc2._url +="unidad";
        customElements.whenDefined("vaadin-combo-box").then(_ => {
            const combo = document.querySelector("vaadin-combo-box");
            combo.dataProvider = (params, callback) => {
                arc2.findAll().then(r => {
                    return r.json();
                    console.log("Chepe Marica de a Cora");
                }).then(data => { callback(data, data.length )})
            };
        })

        let arc3 = new AbstractResourceClient();
        arc3._url +="orden/inactiva";
        customElements.whenDefined("vaadin-grid").then(_ => {
            const tabla = document.querySelector("#tabla2");
            tabla.dataProvider = (params, callback) => {
                arc3.findAll().then(r => {
                    return r.json();
                    console.log("Chepe Marica de a Cora");
                }).then(data => { callback(data, data.length )})
            };
        })