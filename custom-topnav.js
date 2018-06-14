
class CustomTopnav extends HTMLElement {
    constructor() {
      super();
      this.root = this.attachShadow({mode:'closed'});
      this.root.innerHTML = `
      <style>
.btn-group .button {
    background-color: #E31616;
    border: 2px solid white;
    color: white;
    font-border:32px;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 17px;
    position: relative;
    left:25%;
    cursor: pointer;
    float: left;
}
.btn-group .button:not(:last-child) {
    border-right: none; /* Prevent double borders */
}
.btn-group .button:hover {
    background-color: #5D0606;
}
</style>
          `;
    }
  
    get tabUno(){
      return this.getAttribute("tabUno");
    }
  
    get tabDos(){
      return this.getAttribute("tabDos");
    }

    get tabTres(){
        return this.getAttribute("tabTres");
      }
  
    connectedCallback(){
      let div = document.createElement("div");
      div.setAttribute("class", "btn-group");
      let boton1 = document.createElement("button");
      boton1.appendChild(document.createTextNode(this.tabUno));
      boton1.setAttribute("class", "button")
      boton1.onclick = function() {
          document.querySelector("#uno").style.display = 'block';
          document.querySelector("#dos").style.display = 'none';
          document.querySelector("#tres").style.display = 'none';
      }
      div.appendChild(boton1);
      let boton2 = document.createElement("button");
      boton2.appendChild(document.createTextNode(this.tabDos));
      boton2.setAttribute("class", "button")
      boton2.onclick = function() {
          document.querySelector("#dos").style.display = 'block';
          document.querySelector("#tres").style.display = 'none';
          document.querySelector("#uno").style.display = 'none';
      }
      div.appendChild(boton2);
      let boton3 = document.createElement("button");
      boton3.appendChild(document.createTextNode(this.tabTres));
      boton3.setAttribute("class", "button")
      boton3.onclick = function() {
          document.querySelector("#dos").style.display = 'none';
          document.querySelector("#uno").style.display = 'none';
          document.querySelector("#tres").style.display = 'block';
      }
      div.appendChild(boton3);
      this.root.appendChild(div);
    }
  
  }
  customElements.define("custom-topnav", CustomTopnav);
