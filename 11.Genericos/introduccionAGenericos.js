"use strict";
// Un generico es algo que me permite trabajar con cualquier tipo de dato
function imprimeConsola(parametro) {
    console.log(parametro);
}
imprimeConsola(123);
imprimeConsola(new Date());
imprimeConsola({});
imprimeConsola({ nombre: "Fernando" });
// creando funcion generica
function regresar(arg) {
    return arg;
}
console.log(regresar(15.456789));
console.log(regresar("Ricardo Tapia"));
console.log(regresar(new Date()));
//ejemplo de funcion generica
function funcionGenerica(arg) {
    return arg;
}
var deadpool = {
    nombre: "DeadPool",
    nombreReal: "Wade Winston Wilson",
    poder: "Regeneracion"
};
console.log(funcionGenerica(deadpool).nombre);
// Arreglo generico
var heroes = ["Flash", "Batman", "Superman"];
heroes.push("123");
var villanos = ["Lex Luthor", "Flash Reverso"];
//Clases genericas
var Cuadrado = /** @class */ (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        return +this.base * +this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado();
cuadrado.base = 10;
cuadrado.altura = 10;
console.log(cuadrado.area());
