

 class Apocalipsis{
   static instancia:Apocalipsis;

   private constructor(public nombre:string){

   }

   static llamarApocalipsis(){

     if(!Apocalipsis.instancia){
       Apocalipsis.instancia = new Apocalipsis("Soy Apocalipsis.... el Unico")
     }

     return Apocalispsis.instancia;
   }
 }


 //let apocalipsisFalso = new Apocalipsis("Soy Apocalipsis!!!!(falso)")
 let real = Apocalipsis.llamarApocalipsis();
