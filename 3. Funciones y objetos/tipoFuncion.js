"use strict";
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm" + nombre;
}
function salvarMundo() {
    console.log("El mundo esta salvado!");
}
var miFuncion;
// al definir miFuncion asi, se puede ligar a una funcion que tenga como argumentos
// dos numeros, y devuelva un numero
miFuncion = 10;
miFuncion = sumar;
console.log(miFuncion(5, 5));
miFuncion = saludar;
console.log(miFuncion("Batman"));
miFuncion = salvarMundo;
miFuncion();
