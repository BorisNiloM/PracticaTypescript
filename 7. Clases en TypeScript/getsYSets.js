"use strict";
var Avenger2 = /** @class */ (function () {
    function Avenger2(nombre) {
        this._nombre = nombre;
    }
    Object.defineProperty(Avenger2.prototype, "nombre", {
        get: function () {
            if (this._nombre) {
                return this._nombre;
            }
            else {
                return "No tiene un nombre el avenger";
            }
        },
        set: function (nombre) {
            if (nombre.length <= 3) {
                console.error("El nombre debe de tener al menos 3 caracteres");
                return;
            }
            this.nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Avenger2;
}());
var ciclope1 = new Avenger2("Ciclope");
var magneto = new Avenger2("Charles");
