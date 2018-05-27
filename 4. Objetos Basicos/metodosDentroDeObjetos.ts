

let flash: {nombre:string, edad:number, poderes:string[], getNombre:()=> string } = {
  nombre: "Barry Allen",
  edad:24,
  poderes:["Puede correr muy rapido","Viajar por el tiempo"],
  getNombre(){
    return this.nombre;
  }
};
