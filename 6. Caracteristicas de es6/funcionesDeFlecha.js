"use strict";
// Funcion sumar con javascript
// function sumar(a+b){
//   return a+b;
// }
var sumar1 = function (a, b) { return a + b; };
//misma funcion sumar, pero con funcion flecha
var sumar2 = function (a, b) {
    a = a;
    b = b;
    return a + b;
};
//funcion sumar con varias lineas
console.log(sumar(2, 2));
// function darOrden_hulk(orden:string){
//   return `Hulk ${orden}`;
// }
var darOrden_hulk = function (orden) { return "Hulk " + orden; };
console.log(darOrden_hulk("smash!!!"));
// let capitan_america ={
//   nombre: "Hulk",
//   orden_Hulk:function(){
//
//     setTimeout(function(){
//     console.log(this.nombre + " smash!!!");
//   },1000)
/* en console log en vez de aparecer hulk smash, aparece undefined smash, debido
a que la funcion this deja de apuntar a nombre, ya que la funcion setTimeout
esta anidada dentro de otra funcion*/
//   }
// };
var capitan_america = {
    nombre: "Hulk",
    orden_Hulk: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!!"); }, 1000);
        //la funcion de flecha hace que la palabra this no pierda la referencia a
        //la variable
    }
};
capitan_america.orden_Hulk();
