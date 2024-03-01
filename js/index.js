const welcomeUser = document.getElementById('hello-user');
const message = document.getElementById('message-welcome');
const userNameInput = 'Emmanuel Correa';

const hiUser = () => {

    welcomeUser.textContent = `Hola, ${ userNameInput }!`;
    message.textContent = `Bienvenido a la plataforma de Fundacion Misael`

}

window.addEventListener("load", () => {
    // isSession();
    onLoadSite();
    hiUser();
  }
)