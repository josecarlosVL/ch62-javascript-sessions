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

const tellWeather = (temperature) => {
  let message;
  if(temperature>25) message = "hace calor";
  else if(temperature<=25 && temperature>15) message = "temperatura agradable";
  else if(temperature<=10) message = "hace frio";
  else message ="hace mucho frio";
  return message;}
  console.log(tellWeather(26));
  console.log(tellWeather(25));
  console.log(tellWeather(11));
  console.log(tellWeather(0));

  /*
     Realizar una función que reciba un código(weatherCode) de temperatura.
     De acuerdo al código recibo, retornar un mensaje:
     Code   Description
    0           Clear sky
    1, 2, 3     Mainly clear, partly cloudy, and overcast
    45, 48      Fog and depositing rime fog
    
*/

const weatherForecast = weatherCode =>{
let message;
if (weatherCode == 0) message = "Clear Sky";
else if (weatherCode == 1) message = "Mainly clear";
else if (weatherCode == 2) message = "Partly cloudy";
else if (weatherCode == 3) message = "Overcast";
else if (weatherCode == 45) message = "Fog";
else if (weatherCode == 48) message = "Depositing rime fog";
else message = "Can't tell the weather forecast";
return message;
}

console.log(weatherForecast(0));
console.log(weatherForecast(1));
console.log(weatherForecast(2));
console.log(weatherForecast(3));
console.log(weatherForecast(45));
console.log(weatherForecast(48));
console.log(weatherForecast(50));
console.log(weatherForecast("asa"));

const getAccessLevel = ( role ) => {
    let accessLevel;
    switch ( role ) {
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break;  
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado";
    }
    return accessLevel;
};
console.log( getAccessLevel("editor") ); // Acceso para editar contenido

const weatherForecast2 = weatherCode =>{
  let message;
  switch(weatherCode){
    case 0:
      message = "Clear sky";
      break;
    case 1: case 2: case 3:
      message = "Mainly clear, partly cloudy, overcast";
      break;
    case 45: case 48:
      message = "Fog, Depositing rime fog";
      break;
    default:
      message = "Can't tell the weather forecast";
      break;
  }
  return message;
}
console.log(weatherForecast2(0));
console.log(weatherForecast2(1));
console.log(weatherForecast2(2));
console.log(weatherForecast2(3));
console.log(weatherForecast2(45));
console.log(weatherForecast2(48));
console.log(weatherForecast2(50));
console.log(weatherForecast2("asa"));

let userAge = 20;
const votingElegibility =(age) => {
  return age > 18 ? "Puede votar" : "No puede votar";
}
console.log(votingElegibility(userAge));

const evenOdd = number => number%2 ? "Impar" : "Par";
console.log(evenOdd(5));
console.log(evenOdd(8));
