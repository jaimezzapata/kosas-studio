function iniciarSesion() {
    let correo = document.querySelector("#correo");
    let clave = document.querySelector("#clave");
    if (correo == "david@correo.com" || clave == "12345") {
        alert("Bienvenido a KOSAS...")
        window.location.href = "/pages/catalogo.html"
    } else {
        alert("Correo o clave incorrectos...")
    }
}



let iniciar_secion = document.querySelector("#iniciar_secion");
let eventos = ["click", "dblclick", "mouseover"]


iniciar_secion.addEventListener(eventos[0], iniciarSesion)

