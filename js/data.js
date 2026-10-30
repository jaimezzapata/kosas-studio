import {setLocalStorage} from "./local-storage.js";

let usuarios = [
    {
        id: "id1",
        nombre: "Juan Gomez",
        correo: "correo@correo.com",
        telefono: "31512345789",
        contrasena: "12345"
    },
    {
        id: "id2",
        nombre: "Pedro Perez",
        correo: "pedro@correo.com",
        telefono: "3157896511",
        contrasena: "54321"
    }
];

let cosas = []



export function buscarUsuario(correo, clave){
    let auth = usuarios.find((usuario)=> correo == usuario.correo && clave == usuario.contrasena)
    return auth

}

export function registrarUsuario(){
    

}


export function registrarCosa(key, value){
    setLocalStorage(key, value)

}