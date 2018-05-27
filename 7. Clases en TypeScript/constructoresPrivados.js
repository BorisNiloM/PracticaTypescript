"use strict";
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function () {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis.... el Unico");
        }
        return Apocalispsis.instancia;
    };
    return Apocalipsis;
}());
//let apocalipsisFalso = new Apocalipsis("Soy Apocalipsis!!!!(falso)")
var real = Apocalipsis.llamarApocalipsis();
