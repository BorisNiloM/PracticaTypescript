
//Dos forma de escribir stings
let nombre1:string="Bruce";
let nombre2:string='Ricardo';

function getNombres():string{
  return `${nombre1} ${nombre2}`
//el espacio entre los templates, se traduce en espacio entre los strings en js
}

//strings multilinea con ``
let mensaje:string = `1. Esta es una linea normal
2.Hola ${nombre1}
3. Robin es:${nombre2}
4. Los nombres son: ${getNombres()}
5.${5+7}
 `;
//en 4 se devuelve el valor de la funcion, lo mismo para 5
 console.log(mensaje);
