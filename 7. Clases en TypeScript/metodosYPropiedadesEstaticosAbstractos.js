"use strict";
// Los metodos estaticos se pueden instanciar sin inicializar la clase previamente, sin el new Clase
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
var Xmen1 = /** @class */ (function () {
    function Xmen1() {
    }
    Xmen1.crearXmen = function () {
        return new Xmen1();
    };
    Xmen1.nombre = "Wolverine";
    return Xmen1;
}());
//Clases abstractas, es para crear un molde de una clase, contenedor de propiedades
//y metodos que heredan otras clases. No se pueden instanciar objetos de clase abstracta
var Mutantes = /** @class */ (function () {
    function Mutantes(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return Mutantes;
}());
var Xmen2 = /** @class */ (function (_super) {
    __extends(Xmen2, _super);
    function Xmen2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xmen2;
}(Mutantes));
var wolverine = new Xmen2("Wolverine", "Logan");
console.log(wolverine);
