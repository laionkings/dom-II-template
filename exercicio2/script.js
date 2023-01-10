const passwordInput = document.getElementById('password');
const formulario = document.getElementById('formulario');

const escondeSenha = (event) => {
    event.preventDefault();
    passwordInput.setAttribute("type", "password");
    const formulario = document.getElementsByClassName(".ligth");

};

