
// Los metodos estaticos se pueden instanciar sin inicializar la clase previamente, sin el new Clase

class Xmen1{

  static nombre:string = "Wolverine";

  constructor(){

  }

  static crearXmen(){

     return new Xmen1();
  }
}

//Clases abstractas, es para crear un molde de una clase, contenedor de propiedades
//y metodos que heredan otras clases. No se pueden instanciar objetos de clase abstracta

abstract class Mutantes{

  constructor( public nombre:string, public nombreReal:string){

  }
}

class Xmen2 extends Mutantes{

}

let wolverine = new Xmen2("Wolverine","Logan");

console.log(wolverine);
