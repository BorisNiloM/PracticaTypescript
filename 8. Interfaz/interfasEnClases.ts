interface Xmen{
  nombre: string;
  nombreReal:string;
  regenerar( nombreReal:string ):void;
}


class Mutante implements Xmen {
  nombre:string;
  poder:string;
  esBueno:boolean;
  regenerar( nombre ){
    console.log("Hola " + nombre);
  }
}

let wolverine = new Mutante();
