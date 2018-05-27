
function nombreCompleto(
  nombre:string, apellido:string, capitalizado:boolean = false){
// capitalizado con valor false es un parametro por defecto, no importa si
//usuario lo ingresa, ya tiene un valor inicial
    if(capitalizado){
      return capitalizar(nombre)+" "+ capitalizar(apellido);
    }else{
      return nombre + " " + apellido;
    }



}

function capitalizar( palabra:string):string{
  return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}

let nombre = nombreCompleto("tony","stark");

console.log(nombre);
