import { getLocalStorage } from "./local-storage.js";
let usuario = getLocalStorage("usuario")
document.querySelector("#nombre-usuario").textContent = usuario.nombre
