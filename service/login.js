import { habilitarBtnLogin } from "./formularios/habilitarBoton.js";

(() => {

    const formularioLogin = document.getElementById("formulario-login");
    const btnLogin = document.getElementById("btn-login");

    habilitarBtnLogin(btnLogin);

<<<<<<< HEAD
const validarForm = async () => {
	const emailInput = document.querySelector("[data-email]");
	const passwordInput = document.querySelector("[data-correo]");
=======
    const validarBtnLogin = (event) => {
        const element = event.target;
        if (element && element.tagName == 'INPUT') {
            habilitarBtnLogin(btnLogin);
        }
    }
>>>>>>> 32931b2f722d234745e31690644d9ab78980bde7

    formularioLogin.addEventListener("keyup", validarBtnLogin);
})();