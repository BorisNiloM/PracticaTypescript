
// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT


// ==============================
//  Spiderman info
// ==============================
// Constantes?
var HEROE = "Spiderman";
   const HEROE = "Spiderman";

// Declaracion de variables?
var spiderman = "Peter Parker",
   let spiderman = "Peter Parker"
   let venom = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099","Spider-Girl","Ultimate Spider-Man"];

let spiderman2099 = versiones[0];
let spidergirl = versiones[1];
let ultimate = versiones[2];

   let [spiderman, spidergirl,ultimate]= versiones ;

// Destructuracion de objetos?
var villanos = {
  venom: "Eddie Brock",
  carnage: "Cletus Kasady",
  sandman: "William Baker"
};

var venom = villanos.venom;
var carnage = villanos.carnage;
var sandman = villanos.sandman;

     let {venom, carnage,sandman}=villanos;
// Ciclo for Of?
for(var i=0; i<= versiones.length - 1; i++){
  var spider = versiones[i];
  console.log(spider);
}

for ( let version of versiones){
  console.log(version);
}
