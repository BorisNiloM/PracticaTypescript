"use strict";
// Un decorador se colaca antes de una funcion y nos permite expandir su funcionalidad
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function villanos() {
}
function heroes() {
}
//decoradores de clase normal
function consola(constructor) {
    console.log(constructor);
}
//decorador de fabrica
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola;
    }
    else {
        return null;
    }
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        imprimirConsola(true)
    ], Villano);
    return Villano;
}());
//ejemplo de decorador
function planVillano(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es dominar el mundo!");
    };
}
function imprimible(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log(this);
    };
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        imprimible //decorador anidado
        ,
        planVillano
    ], Villano);
    return Villano;
}());
var lex = new Villano("Lex Luthor");
let.imprimirPlan();
//decoradores de metodos
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        if (!esEditable) {
            console.warn("No me haran cambiar de opinion");
        }
        descriptor.writable = esEditable;
    };
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano.prototype.plan = function () {
        console.log("Es dominar el mundo");
    };
    __decorate([
        editable(true)
    ], Villano.prototype, "plan", null);
    return Villano;
}());
var lex = new Villano("Lex Luthor");
let.plan = function () {
    console.log("Es cortar flores");
};
lex.plan();
// decoradores de propiedades
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        descriptor.writable = esEditable;
    };
}
function editableProp(esEditable) {
    return function (target, nombrePropiedad) {
        var descriptor = {
            writable: esEditable
        };
        return descriptor;
    };
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
        this.nombre = nombre;
    }
    Villano.prototype.plan = function () {
        console.log("Es dominar el mundo");
    };
    __decorate([
        editableProp(true)
    ], Villano.prototype, "nombre", void 0);
    __decorate([
        editable(true)
    ], Villano.prototype, "plan", null);
    return Villano;
}());
var lex = new Villano("Lex Luthor");
console.log(lex);
//decoradores de parametro
function parametro(target, metodo, index) {
    console.log(target, metodo, index);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
        imprimir(plan, boolean);
        mensaje: string;
        void {
            if: function (plan) {
                console.log("El plan es: ");
            }, else: {
                console: .log(mensaje)
            }
        };
    }
    return Villano;
}());
