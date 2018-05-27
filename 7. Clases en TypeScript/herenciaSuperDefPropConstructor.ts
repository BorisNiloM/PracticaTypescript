

class Avengers{

  constructor( public nombre:string, private nombreReal:string){

  }

  protected getNombre():string{
    return this.nombre;
  }
}

class Xmen extends Avengers{
  //sino defino un constructor para esta clase, toma por defecto el constructor
  // de la clase padre
  constructor( a:string, b:string ){
    super(a,b);
  }

 //los metodos protected se llaman desde la misma clase o de metodos publicos que
 //acceden al metodo protegido de la clase padre
  public getNombre():string{
    return super.getNombre();
  }
}
//herencia es tranferir propiedades y metodos a una clase

let ciclope:Xmen = new Xmen("Ciclope", "Scott");

console.log(ciclope.getNombre() );
