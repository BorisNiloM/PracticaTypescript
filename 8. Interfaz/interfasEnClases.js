"use strict";
var Mutante = /** @class */ (function () {
    function Mutante() {
    }
    Mutante.prototype.regenerar = function (nombre) {
        console.log("Hola " + nombre);
    };
    return Mutante;
}());
var wolverine = new Mutante();
