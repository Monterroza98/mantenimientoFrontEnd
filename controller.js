import AbstractResourceClient from "./boundaries/AbstractResourceClient.js";

class Controller{
    constructor(){
        this.arc = new AbstractResourceClient();
    }

    EntidadesPorId(id){
        return this.arc.findById(id).then(
            function(response) {
                if(response.ok) {
                    return response.json();
                }else {
                    return undefined;
                    }
            }
        );
    }

    asignarTipo(t){
        this.arc._url+=t;
        console.log(this.arc._url);
        
      }

}

export default Controller;