"use strict";
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Antman";
        //propiedad private, puede ser modificado su valor dentro de su misma clase
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    // en Javascript las propiedades y metodos son publicos
    // en ts si no especifico el tipo es publico
    Avenger.prototype.bio = function () {
        // si el metodo no se le pone ningun tipo, es publica por defecto
        var mensaje = this.nombre + " " + this.nombreReal + " " + this.equipo;
        console.log(mensaje);
    };
    Avenger.prototype.cambiarEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    Avenger.prototype.cambiarEquipo = function (nuevoEquipo) {
        // un metodo privado solo puede accederse dentro de la misma clase, es decir si
        // sale de su constructor o de algun metodo publico, en este ejempo de su constructor
        // o de public bio
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    return Avenger;
}());
var antman = new Avenger("Antman", "cap", "Scott Lang");
antman.bio();
antman.cambiarEquipoPublico("ironman");
