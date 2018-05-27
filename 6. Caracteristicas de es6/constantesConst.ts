
//por convencion todas las constantes const van en mayusculas
const OPCIONES:string="Activo";

//las constantes en un mismo scope no se pueden redefinir, lanza error
//OPCIONES="Desactivado";

if(true){
  const OPCIONES:string ="Desactivado";
  //En el ambito local se puede redeclarar la variable const
}

for( const i of [1,2,3,4,5,6]){
  console.log(i);
  /*en este ambito local, por cada iteracion del for, se crea un nuevo ambito
  para el i, es por ello que esta permitido*/
}

/*el unico problema es con los objetos, que permite hacer redeclaraciones de sus 
atributos en el mismo scope*/
const OBJETO = {
  estado:true,
  audio:10,
  ultima: "main"
}

OBJETO.estado = false;
OBJETO.audio = 1;

console.log(OBJETO);
