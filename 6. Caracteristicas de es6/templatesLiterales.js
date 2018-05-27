"use strict";
//Dos forma de escribir stings
var nombre1 = "Bruce";
var nombre2 = 'Ricardo';
function getNombres() {
    return nombre1 + " " + nombre2;
    //el espacio entre los templates, se traduce en espacio entre los strings en js
}
//strings multilinea con ``
var mensaje = "1. Esta es una linea normal\n2.Hola " + nombre1 + "\n3. Robin es:" + nombre2 + "\n4. Los nombres son: " + getNombres() + "\n5." + (5 + 7) + "\n ";
//en 4 se devuelve el valor de la funcion, lo mismo para 5
console.log(mensaje);
