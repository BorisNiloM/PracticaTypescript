"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avengers = /** @class */ (function () {
    function Avengers(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    Avengers.prototype.getNombre = function () {
        return this.nombre;
    };
    return Avengers;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    //sino defino un constructor para esta clase, toma por defecto el constructor
    // de la clase padre
    function Xmen(a, b) {
        return _super.call(this, a, b) || this;
    }
    //los metodos protected se llaman desde la misma clase o de metodos publicos que
    //acceden al metodo protegido de la clase padre
    Xmen.prototype.getNombre = function () {
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(Avengers));
//herencia es tranferir propiedades y metodos a una clase
var ciclope = new Xmen("Ciclope", "Scott");
console.log(ciclope.getNombre());
