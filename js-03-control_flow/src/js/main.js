let isActive = true;
if (isActive === true)console.log ("User is Active");
if (isActive == true) console.log ("User is Active");
if (isActive){
    console.log ("User is Active");
}

//Bloque de código
// conjunto de sentencias entre llaves
{
    let firstName = "Juan";
    let lastName = "Perez";
    var alias = "Pan";
    console.log("Hello "+firstName+" "+lastName); // Hello Juan Perez
    //Bloque de código anidado
    {
  //console.log(firstName,lastName,alias); // Truena por que las variables firstName y lastName aún no existen en este bloque
    let firstName = "José Carlos";
    let lastName = "Velasco";
    var alias = "Tiky";
    console.log(firstName,lastName,alias); //"José Carlos Velasco Tiky#
    }
  //let firstName = "José Carlos"; // Truena porque let no deja redeclarar
    //Moraleja: let funciona solo dentro de su mismo bloque y no puede redeclararse (truena)
    //Moraleja2: ver se puede redeclarar, let y const no
    console.log(firstName,lastName,alias); //"Juan Perez Tiky"
}

const tellWeather = (temperature) =>{
 if(temperature>25) return("hace calor");
  else return( "hace frio");}
  console.log(tellWeather(25));
  