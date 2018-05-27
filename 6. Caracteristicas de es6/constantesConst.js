"use strict";
//por convencion todas las constantes const van en mayusculas
var OPCIONES = "Activo";
//las constantes en un mismo scope no se pueden redefinir, lanza error
//OPCIONES="Desactivado";
if (true) {
    var OPCIONES_1 = "Desactivado";
    //En el ambito local se puede redeclarar la variable const
}
for (var _i = 0, _a = [1, 2, 3, 4, 5, 6]; _i < _a.length; _i++) {
    var i = _a[_i];
    console.log(i);
}
/*el unico problema es con los objetos, que permite hacer redeclaraciones de sus
atributos en el mismo scope*/
var OBJETO = {
    estado: true,
    audio: 10,
    ultima: "main"
};
OBJETO.estado = false;
OBJETO.audio = 1;
console.log(OBJETO);
