class Avenger2{

  private _nombre:string;

  constructor( nombre?:string){
    this._nombre = nombre
  }

  get nombre():string{

    if( this._nombre){
      return this._nombre;
    }else{
      return "No tiene un nombre el avenger";
    }
  }

  set nombre(nombre:string){

    if(nombre.length <= 3){
      console.error("El nombre debe de tener al menos 3 caracteres");
      return
    }
    this.nombre = nombre;
  }
}

let ciclope1:Avenger2 = new Avenger2("Ciclope");
let magneto:Avenger2 = new Avenger2("Charles");
