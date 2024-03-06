const welcomeUser = document.getElementById('hello-user');
const message = document.getElementById('message-welcome');
const vision = document.getElementById('message-vision');
// const btnWsp = document.getElementById('link_wsp_img');
const userNameInput = 'Emmanuel Correa';
const contentVision = `Nuestra meta es ser una organización social de apoyo a los organismos del Estado, reconocida y autosostenible, que contribuye con el desarrollo integral de la comunidad.`

const hiUser = () => {

    welcomeUser.textContent = `Hola, ${ userNameInput }!`;
    message.textContent = `Bienvenido a la plataforma de Fundacion Misael`
    vision.textContent = contentVision;
}

window.addEventListener("load", () => {
    onLoadSite();
    hiUser();
  }
)