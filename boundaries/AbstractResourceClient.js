class AbstractResourceClient {
  constructor() {
    this._url="http://localhost:8080/MantenimientoWebData-1.0-SNAPSHOT/webresources/";
  }
  
  get url(){
    return this._url;
  }

  findByName(nombre){
    return fetch(this._url+nombre);
  }
  findById(id){
    return fetch(this._url+id);
  }
  findAll(){
    return fetch(this._url);
  }
}
export default AbstractResourceClient;
