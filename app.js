import { valida } from "./validaciones.js";
/**ojo con data campo los corchetes los saque OJO!! estas usando un solo campo para las dos validaciones */
const valida = document.querySelectorAll(["data-campo"]);
  producto.forEach((campo) => {
  campo.addEventListener("blur", (campo) => {
    valida(campo.target);
  });
});