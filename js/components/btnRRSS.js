class BtnRRSS extends HTMLElement {
    constructor() {
      super();
      this.attributesComponents = [
        this.classname = 'button-flout',
        this.phone='56933329406',
        this.message = `Hola, Me gustaría más información sobre tu trabajo`.replace(' ','%20'),
        this.url = `https://api.whatsapp.com/send?phone=${this.phone}6&text=${this.message}`,
        this.srcImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png"
      ];
    }
    
    static get observedAttributes(){ return [ 'classname', 'phone', 'message','url']; }
    attributeChangedCallback(attribute, _, newAttr){
      this.attributesComponents = [...this.attributesComponents, attribute]
      this[attribute] = newAttr;
    }
    connectedCallback() {
      this.innerHTML = `
      <div id="bmc-wbtn" class="${this.classname}">
        <a id="link_wsp" href="${this.url}"> <img src="${this.srcImg}" alt="WhatsApp"></a>
      </div>  
      `;
    }
  }
  
  customElements.define('btn-rrss-component', BtnRRSS);