class Header extends HTMLElement {
  constructor() {
    super();
    this.attributesComponents = [
      this.name = 'Ingresa tu titulo',
      this.classname = 'navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary data-bs-theme="dark'
      // this.classname = 'navbar navbar-expand-lg navbar-dark'
    ];
  }
  static get observedAttributes(){ return ['name', 'classname']; }
  attributeChangedCallback(attribute, _, newAttr){
    this.attributesComponents = [...this.attributesComponents, attribute]
    this[attribute] = newAttr;
  }

    connectedCallback() {
      this.innerHTML = `
      <header>
        <nav id="navBar" class="${this.classname}">
        <div class="header">
        <a id="url" href="/index.html"><img src="assets/logo-fundacion.jpg" alt="Logo de la fundación" class="logo"></a>
          <ul class="nav">
            <li><a id="url" href="/index.html">Inicio</a></li>
            <li><a id="url" href="/servicios.html">Servicios</a></li>
            <li><a id="url" href="/contacto.html">Contacto</a></li>
            <li><a id="url" href="/donar.html">Donar</a></li>
          </ul>        
        </nav>
      </header>`;
    }
}

customElements.define('header-component', Header);