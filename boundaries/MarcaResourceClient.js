import AbstractResourceClient from './AbstractResourceClient.js';
class MarcaResourceClient extends AbstractResourceClient {
  constructor() {
    super();
    this._url+="marca/";
  }

  findByName(nombre){
    return fetch(this._url+"nombre/"+nombre);
  }
  findById(id){
    return fetch(this._url+id);
  }

}
export default MarcaResourceClient;
