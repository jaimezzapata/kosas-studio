let usuarios = [
    {
        id: "id1",
        nombre: "Jaime Zapata",
        correo: "correo@correo.com",
        telefono: "3152001282",
        contrasena: "12345"
    },
    {
        id: "id2",
        nombre: "Salome Ramírez",
        correo: "salome@gmail.com",
        telefono: "3246778900",
        contrasena: "12345"
    }
]


export function buscarUsuario(correo, clave) {
    let auth = usuarios.find((usuario) => correo == usuario.correo && clave == usuario.contrasena)
    return auth
}

export function registrarUsuario() {

}