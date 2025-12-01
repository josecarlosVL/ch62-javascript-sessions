const frutas = []; //Empty Array
const fruits = new Array(); //Array using constructor 
const numeros = [5]; //Array con un solo valor
const numbers = new Array(5); //Array con 5 espacios vacíos.


const techStack = ["HTML","CSS","Javasvript"]
// Acceder al primer elemento
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"

// Acceder al primer elemento
console.log( techStack.length ); // 3
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"
// Accediendo al segundo elemento
console.log(`Accediendo al segundo elemento:  ${ techStack[1] }` ); // "CSS"

// Acceder al último elemento (longitud - 1)
console.log(`Accediendo al último elemento:  ${ techStack[techStack.length-1] }` ); // "Javascript"

//Agregar un elemento al final
techStack[techStack.length] = "Typescript";



const shoppingList = ["Leche","Huevos"];
shoppingList.push("Pan"); //Agrega el elemento pan al final ["Leche","Huevos","Pan"];
console.log("Push",shoppingList);
shoppingList.unshift("Café"); //Agrega el elemento café al inicio ["Café","Leche","Huevos","Pan"]
console.log("Unshift",shoppingList);
const removedItem = shoppingList.pop();//Elimina el último elemento del array y lo devuelve
console.log(`Eliminando el último elemento: ${removedItem}`);
console.log("Lista actual:",shoppingList);
const firstItem = shoppingList.shift();//Elimina el primer elemento del array y lo devuelve
console.log(`Eliminando el primer elemento: ${firstItem}`);
console.log("Lista actual:",shoppingList);