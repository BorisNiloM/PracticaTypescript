// Un decorador se colaca antes de una funcion y nos permite expandir su funcionalidad

@decorador
function villanos(){


}

function heroes(){


}

//decoradores de clase normal

  function consola( constructor: Function){
    console.log( constructor );
  }


//decorador de fabrica

function imprimirConsola(imprimir:boolean):Function{

    if( imprimir ){
      return consola;
    }else{
      return null
    }
}

@imprimirConsola(true)
class Villano{

    constructor( public nombre:string){

    }
}

//ejemplo de decorador

  function planVillano( constructor:Function ){

    constructor.prototype.imprimirPlan = function(){
      console.log("El plan de "+ this.nombre + " es dominar el mundo!")
    }
  }

  function imprimible( constructor:Function ){

    constructor.prototype.imprimirPlan = function(){
      console.log( this);
    }
  }



  @imprimible     //decorador anidado
  @planVillano
  class Villano {

  constructor ( public nombre:string ){}
}

  let lex = new Villano("Lex Luthor");
  let.imprimirPlan();


//decoradores de metodos

  function editable( esEditable:boolean ){
    return function( target:any, nombrePropiedad:string, descriptor:PropertyDescriptor  ){

      if(!esEditable ){
        console.warn("No me haran cambiar de opinion")
      }
      descriptor.writable = esEditable;


    }
  }

class Villano {

  constructor ( public nombre:string ){}

  @editable(true)
  plan(){
    console.log("Es dominar el mundo");
  }

}

let lex = new Villano("Lex Luthor");

let.plan=function(){
  console.log("Es cortar flores");
}

lex.plan();


// decoradores de propiedades


  function editable( esEditable:boolean ){
    return function( target:any, nombrePropiedad:string, descriptor:PropertyDescriptor  ):any {

      descriptor.writable = esEditable;

    }
  }

  function editableProp( esEditable:boolean ){
    return function( target:any, nombrePropiedad:string){

      let descriptor:PropertyDescriptor={
        writable:esEditable
      }

      return descriptor;
    }
  }

class Villano {

  @editableProp(true)
  public nombre:string;

  constructor ( public nombre:string ){
    this.nombre = nombre;
  }

  @editable(true)
  plan(){
    console.log("Es dominar el mundo");
  }

}

let lex = new Villano("Lex Luthor");

console.log(lex);

//decoradores de parametro

function parametro( target:any,  metodo:string, index:number ){
  console.log(target, metodo, index );
}

class Villano{

  constructor( public nombre:string){

    imprimir( plan:boolean, @parametro mensaje:string ):void{

      if(plan ){
        console.log("El plan es: ");
      }else{
        console.log( mensaje );
      }
    }
  }
}
