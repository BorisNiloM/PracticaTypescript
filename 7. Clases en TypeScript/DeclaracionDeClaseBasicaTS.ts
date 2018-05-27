

class Avenger {

  public nombre:string ="Antman";
  //propiedad public, puede ser accesado a lo largo de cualquier lado del programa
  protected equipo:string;
  //propiedad protected, puedo cambiar el valor solo dentro de su clase original o su herencia
  private nombreReal:string;
  //propiedad private, puede ser modificado su valor dentro de su misma clase

  private puedePelear:boolean = false;
  private peleasGanadas:number = 0;

  constructor ( nombre:string, equipo:string, nombreReal:string ){
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }
  // en Javascript las propiedades y metodos son publicos
  // en ts si no especifico el tipo es publico

  public bio( ):void{
    // si el metodo no se le pone ningun tipo, es publica por defecto

    let mensaje:string = `${this.nombre} ${this.nombreReal} ${this.equipo}`;
    console.log(mensaje);
    }

  public cambiarEquipoPublico(nuevoEquipo:string):boolean{
    return  this.cambiarEquipo(nuevoEquipo);
  }

  private cambiarEquipo(nuevoEquipo:string):boolean{
    // un metodo privado solo puede accederse dentro de la misma clase, es decir si
    // sale de su constructor o de algun metodo publico, en este ejempo de su constructor
    // o de public bio

    if( nuevoEquipo=== this.equipo){
      return false;
    }else{
      return true:
    }
  }

}

let antman:Avenger = new Avenger( "Antman","cap","Scott Lang");

antman.bio();
antman.cambiarEquipoPublico("ironman");
