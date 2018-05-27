"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
require("sweetalert");
// console.log("Hola mundo");
//
// $(document).ready(function(){
//   console.log("Pagina lista y cargada...");
//
//   $("h1").text("Hola desde TypesScript");
//   $("p").text("Hola desde este parrafo...");
//   $("h1").css("background-color","red");
// });
$("#botAlerta").on("click", function () {
    swal({
        icon: "success"
    });
});
