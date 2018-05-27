
// Funcion sumar con javascript
// function sumar(a+b){
//   return a+b;
// }

let sumar1 = (a:number,b:number)=>a+b ;
//misma funcion sumar, pero con funcion flecha

let sumar2 =(a:number,b:number)=>{
  a=a;
  b=b;
  return a+b;
}
//funcion sumar con varias lineas

console.log(sumar(2,2));

// function darOrden_hulk(orden:string){
//   return `Hulk ${orden}`;
// }

let darOrden_hulk =(orden:string)=>`Hulk ${orden}`;

console.log(darOrden_hulk("smash!!!"));

// let capitan_america ={
//   nombre: "Hulk",
//   orden_Hulk:function(){
//
//     setTimeout(function(){
//     console.log(this.nombre + " smash!!!");
//   },1000)
/* en console log en vez de aparecer hulk smash, aparece undefined smash, debido
a que la funcion this deja de apuntar a nombre, ya que la funcion setTimeout
esta anidada dentro de otra funcion*/
//   }
// };

let capitan_america ={
  nombre: "Hulk",
  orden_Hulk:function(){

    setTimeout( ()=> console.log(this.nombre + " smash!!!"),1000);
    //la funcion de flecha hace que la palabra this no pierda la referencia a
    //la variable
  }
};  

capitan_america.orden_Hulk();
