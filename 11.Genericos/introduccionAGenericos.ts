
// Un generico es algo que me permite trabajar con cualquier tipo de dato

  function imprimeConsola( parametro ){
    console.log(parametro);
  }

  imprimeConsola( 123);
  imprimeConsola( new Date());
  imprimeConsola({});
  imprimeConsola({nombre:"Fernando"});


// creando funcion generica

  function regresar<T>( arg:T){   //por convencion se usa T
    return arg;
  }

  console.log(    regresar(15.456789)         );
  console.log(    regresar("Ricardo Tapia")   );
  console.log(    regresar( new Date() )      );

  //ejemplo de funcion generica

  function funcionGenerica<T>(arg:T){
    return arg;
  }

  type Heroe ={
    nombre:string;
    nombreReal:string;
  }

  type Villano = {
    nombre:string;
    poder:string;
  }

  let deadpool = {
    nombre:"DeadPool",
    nombreReal:"Wade Winston Wilson",
    poder:"Regeneracion"
  };

  console.log(   funcionGenerica<Villano>( deadpool).nombre );

// Arreglo generico

 let heroes:Array<string> =["Flash","Batman","Superman"];

 heroes.push("123");

 let villanos:string[]=["Lex Luthor","Flash Reverso"];


//Clases genericas

class Cuadrado<T extends number|string >{
  base:T;
  altura:T;
  area():number{
    return +this.base * +this.altura;
  }
}

let cuadrado = new Cuadrado<string>();

cuadrado.base = 10;
cuadrado.altura = 10;
console.log( cuadrado.area()  );
