class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.attributesComponents = [
      this.copyright = 'Todos los derechos reservados',
      this.year = `${ new Date().getFullYear() }`,
      this.company = 'Fundacion Misael',
      this.classname = 'footer',
      this.classnamemessage = 'copyright'
    ];
  }

  static get observedAttributes(){ return ['copyright', 'year', 'company', 'classname','classnamemessage']; }

  attributeChangedCallback(attribute, _, newAttr){
    this.attributesComponents = [...this.attributesComponents, attribute]
    this[attribute] = newAttr;
  }

  templateCss() {
    return `
      <style>
        footer {
          text-align: center;
          background-color: #182141;
          font-family: sans-serif;
          color: #fff;
          width: 100%;
          bottom: 0;
          position:fixed;
        }
      </style>
    `;
  }

  template() {
    return `
      <footer class="${ this.classname }">
        <p class="${ this.classnamemessage }">© ${this.year} ${ this.company}. Todos los derechos reservados.</p>
      </footer>
    `;
  }

  render(){
    this.shadowRoot.innerHTML = `
    ${this.templateCss()}
    ${this.template()}
  `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('footer-component', Footer);