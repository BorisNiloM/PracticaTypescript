
// let avengers ={
//   nick: "Samuel Jackson",
//   ironman: "Robert Downey Jr",
//   vision: "Paul Bettany"
// };
// //para poder sacar los atributos del objeto avengers se hace
// let nick = avengers.nick;
// let ironman = avengers.ironman;
// let vision = avengers.vision;

let avengers ={
  nick: "Samuel Jackson",
  ironman: "Robert Downey Jr",
  vision: "Paul Bettany"
};

//ocupando destructuracion
//
// let { nick,ironman,vision} = avengers;
//
// console.log(nick);
// console.log(ironman);
// console.log(vision);

let {nick, ironman:warmachine,vision, thor="Rusio"}= avengers;
// a ironman se le renombra warmachine con :
// thor no estaba en el objeto avengers, pero permite agregarlo y darle un valor
console.log(thor)
