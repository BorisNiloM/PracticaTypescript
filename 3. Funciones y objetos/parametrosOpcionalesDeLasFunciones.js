"use strict";
function nombreCompleto(nombre, apellido) {
    //apellido?, el ? hace que la variable apellido sea opcional colocarla
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return nombre;
    }
}
var nombre = nombreCompleto("Barry", "Allen");
console.log(nombre);
