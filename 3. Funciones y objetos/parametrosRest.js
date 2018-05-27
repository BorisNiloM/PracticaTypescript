"use strict";
function nombreCompleto(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    //se ingresa el primer parametro, y los demas automaticamente se concatenan al primero
    return nombre + " " + losDemasParametros.join(" ");
}
var superman = nombreCompleto("Clark", "Joseph", "Kent");
var iroman = nombreCompleto("Anthony", "Edward", "Tony", "Stark");
console.log(superman);
console.log(iroman);
