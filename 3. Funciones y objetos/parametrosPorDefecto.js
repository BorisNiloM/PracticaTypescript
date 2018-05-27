"use strict";
function nombreCompleto(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = false; }
    // capitalizado con valor false es un parametro por defecto, no importa si
    //usuario lo ingresa, ya tiene un valor inicial
    if (capitalizado) {
        return capitalizar(nombre) + " " + capitalizar(apellido);
    }
    else {
        return nombre + " " + apellido;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
var nombre = nombreCompleto("tony", "stark");
console.log(nombre);
