

function nombreCompleto( nombre:string, ...losDemasParametros:string[]):string{
  //se ingresa el primer parametro, y los demas automaticamente se concatenan al primero
  return nombre +" "+ losDemasParametros.join(" ");
}

let superman:string = nombreCompleto("Clark", "Joseph","Kent");
let iroman:string = nombreCompleto("Anthony", "Edward","Tony","Stark");

console.log(superman);
console.log(iroman);
