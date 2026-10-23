let usuarios = [
    {
        id: "id1",
        nombre: "David Romero",
        correo: "correo@correo.com",
        telefono: "3216611935",
        contraseña: "12345"
    },
    {
        id: "id2",
        nombre: "Juan Perez",
        correo: "juan@correo.com",
        telefono: "3181990000",
        contraseña: "54321"
    }
]


export function buscarUsuario(correo, clave) {
   let auth = usuarios.find((usuario)=> correo == usuario.correo && clave == usuario.
   contrasena)
   return auth
}

function registrarUsuario(){

}