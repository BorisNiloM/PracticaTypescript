"use strict";
function enviarMision(xmen) {
    console.log("Enviando a: " + xmen.nombre);
    xmen.regenerar("Logan");
}
;
var wolverine = {
    nombre: "Wolverine",
    regenerar: function (x) {
        console.log("Se ha regenerado " + x);
    }
};
enviarMision(wolverine1);
