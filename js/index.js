const welcomeUser = document.getElementById('hello-user');

const mision = document.getElementById('org-mision');
const vision = document.getElementById('org-vision');
const valores = document.getElementById('org-valores');
const userNameInput = 'Emmanuel Correa';
const contentMision = 'Ser una organización social que tiene por finalidad u objetivo la promoción del desarrollo integral de personas, familias, grupos y comunidades que viven en condiciones de necesidad de cualquier tipo, pobreza y/o marginalidad y espiritualidad.'
const contentVision = `Ser una organización social de apoyo a los organismos del Estado, reconocida y autosustentable, que contribuye con el desarrollo integral de la comunidad.`
const contentValores = `Nuestros valores son: la solidaridad, la fraternidad, la justicia, la paz, la esperanza, la fe, el amor, el respeto, la honestidad, la responsabilidad y la alegría.`
const hiUser = () => {  
  mision.textContent = contentMision;
  vision.textContent = contentVision;
  valores.textContent = contentVision;
}

window.addEventListener("load", () => {
    // onLoadSite();
    hiUser();
  }
)