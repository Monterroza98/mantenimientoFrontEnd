class CustomTopnav extends HTMLElement {
    constructor() {
      super();
      this.root = this.attachShadow({mode:'closed'});
      this.root.innerHTML = `
      <style>
.btn-group .button {
    background-color: #4CAF50; /* Green */
    border: 1px solid green;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    float: left;
}
.btn-group .button:not(:last-child) {
    border-right: none; /* Prevent double borders */
}
.btn-group .button:hover {
    background-color: #3e8e41;
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
  
    connectedCallback(){
      let div = document.createElement("div");
      div.setAttribute("class", "btn-group");
      let boton1 = document.createElement("button");
      boton1.appendChild(document.createTextNode(this.tabUno));
      boton1.setAttribute("class", "button")
      boton1.onclick = function() {
          document.querySelector("#uno").style.display = 'block';
          document.querySelector("#dos").style.display = 'none';
      }
      div.appendChild(boton1);
      let boton2 = document.createElement("button");
      boton2.appendChild(document.createTextNode(this.tabDos));
      boton2.setAttribute("class", "button")
      boton2.onclick = function() {
          document.querySelector("#dos").style.display = 'block';
          document.querySelector("#uno").style.display = 'none';
      }
      div.appendChild(boton2);
      this.root.appendChild(div);
    }
  
  }
  customElements.define("custom-topnav", CustomTopnav);