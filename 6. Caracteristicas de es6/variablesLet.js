"use strict";

let nombre = "Tony";
let nombre ="Ricardo"

if(true){

  let nombre ="Bruce";

}

console.log(nombre);

/*A diferencia de var, let crea una variable en un ambito especifico, por ejemplo
en el ambito global nombre = tony, y dentro del if, nombre= bruce, al imprimir el
console log se imprime el nombre del ambito global*/
/*La variables declaradas con let, no se puede redeclarar en el mismo scope, por ejemplo
nombre es tony y lanza error en la consola al declararlo como ricardo. En typescrip
informa inmediatamente si se desea redeclarar una variable*/
