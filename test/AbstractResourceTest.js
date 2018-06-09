import AbstractResourceClient from "../boundaries/AbstractResourceClient.js";

mocha.setup("bdd");
var assert=chai.assert;
var expect=chai.expect;
var id;
var cut;
var esperando;
var dato;
var opcion="marca/";
var nombre;
    // var selector= document.querySelector("#seleccionado");
    // selector.addEventListener('change', 
    // function(){
    //     var up = this.options[selector.selectedIndex];
    //     dato= up.value;
    //     opcion=dato+"/";
    //     console.log(opcion);
    // })

describe('AbstractResourceClient#findById', ()=>{

    it("Tener un id", ()=>{
        id='1';
        assert.isDefined(id);
    })

    it("Tener una instancia", ()=>{
            cut= new AbstractResourceClient();
            assert.isDefined(cut);
            console.log(opcion);
            cut._url+=opcion;
            console.log(cut._url);
    })
    
    
    it("Hacer una peticion", async () => {
        const r= await cut.findById(id).then((response)=>{
            return response.json();
        }).then((data)=>{
            esperando=JSON.stringify(data);
        });
        assert.isDefined(esperando);
        assert.isNotNull(esperando);
        console.log(esperando);
    })

});

describe('AbstractResourceClient#findByName', ()=>{

    it("Tener un nombre", ()=>{
        nombre="n";
        assert.isDefined(nombre);
    })

    it("Tener una instancia", ()=>{
        cut= new AbstractResourceClient();
        assert.isDefined(cut);
        cut._url+=opcion;
    })

    it("Hacer una peticion", async () => {
        cut._url+="nombre/";
        const r= await cut.findByName(nombre).then((response)=>{
            return response.json();
        }).then((data)=>{
            esperando=JSON.stringify(data);
        });
        assert.isDefined(esperando);
        assert.isNotNull(esperando);
        console.log(esperando);
    })
});

describe('AbstractResourceClient#findAll', ()=>{

    it("Tener una instancia", ()=>{
        cut= new AbstractResourceClient();
        assert.isDefined(cut);
        cut._url+=opcion;
    })

    it("Hacer una peticion", async () => {
        const r= await cut.findAll().then((response)=>{
            return response.json();
        }).then((data)=>{
            esperando=JSON.stringify(data);
        });
        assert.isDefined(esperando);
        assert.isNotNull(esperando);
        console.log(esperando);
    })
});

mocha.run();