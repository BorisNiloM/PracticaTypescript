
type Heroe = {
  nombre:string,
  edad: number,
  poderes:any[],
  getNombre:()=>string
};

let flash: Heroe={
  nombre: "Barry Allen",
  edad: 24,
  poderes:["Puede correr muy rapido","Viajar por el tiempo"],
  getNombre(){
    return this.nombre;
  }
};

let superman:Heroe={
  nombre:"Clark Kent",
  edad:500,
  poderes:["Puede volar","Super velocidad"],
  getNombre(){
    return this.nombre;
  }
}
