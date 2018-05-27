

function nombreCompleto( nombre:string, apellido?:string):string{
  //apellido?, el ? hace que la variable apellido sea opcional colocarla
  if(apellido){
    return nombre + " " + apellido;
  }else{
    return nombre;
  }

}

let nombre = nombreCompleto("Barry","Allen");

console.log(nombre);
