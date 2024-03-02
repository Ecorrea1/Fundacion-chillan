class BtnRRSS extends HTMLElement {
    constructor() {
      super();
      this.attributesComponents = [
        this.name = 'Nuevo Registro', //Aqui puedes darle Definiciones por defecto
        this.classname = 'btn btn-primary'
      ];
    }
    
    static get observedAttributes(){ return ['name', 'classname']; }
    attributeChangedCallback(attribute, _, newAttr){
      this.attributesComponents = [...this.attributesComponents, attribute]
      this[attribute] = newAttr;
    }

    connectedCallback() {
      this.innerHTML = `
      <div id="bmc-wbtn" class="button-flout">
          <a id="link_wsp"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png" alt="WhatsApp"></a>
      </div>  
      `;
    }
  }
  
  customElements.define('btn-rrss-component', BtnRRSS);