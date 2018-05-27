

let thor1 ={
  nombre: "Thor",
  arma:"Mjolnir"
};

let ironman ={
  nombre:"Ironman",
  arma:"Armorsuit"
};

let capitan ={
  nombre:"Capitan America",
  arma:"Escudo"
};

let avengers1 = [thor1,ironman,capitan];

//for of de es6, recorre todos los elementos, mas corto que en es5 y tradicional

for( let avenger of avengers1){
  console.log(avenger.nombre,avenger.arma)
}

//for in en es5, recorre todos los elementos
for(let i in avengers1){
  let avenger = avengers1[i];
  console.log(avenger.nombre,avenger.arma);
}

//for tradicional
for(let i=0; i<= avengers1.length-1;i++){
  let avenger = avengers1[i];
  console.log(avenger.nombre,avenger.arma);
}
