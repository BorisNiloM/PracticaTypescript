"use strict";
var thor1 = {
    nombre: "Thor",
    arma: "Mjolnir"
};
var ironman = {
    nombre: "Ironman",
    arma: "Armorsuit"
};
var capitan = {
    nombre: "Capitan America",
    arma: "Escudo"
};
var avengers1 = [thor1, ironman, capitan];
//for of de es6, recorre todos los elementos, mas corto que en es5 y tradicional
for (var _i = 0, avengers1_1 = avengers1; _i < avengers1_1.length; _i++) {
    var avenger_1 = avengers1_1[_i];
    console.log(avenger_1.nombre, avenger_1.arma);
}
//for in en es5, recorre todos los elementos
for (var i in avengers1) {
    var avenger_2 = avengers1[i];
    console.log(avenger_2.nombre, avenger_2.arma);
}
//for tradicional
for (var i = 0; i <= avengers1.length - 1; i++) {
    var avenger_3 = avengers1[i];
    console.log(avenger_3.nombre, avenger_3.arma);
}
