/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.
sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/


/**
 * 
 * @param {string} firstName Person's name
 * @param {string} lastName  Person's lastname
 * @returns  greeting message
*/
const printFullName = function(firstName,lastName){
    return `${firstName} ${lastName} estudiante de la Ch62`;
};

console.log(printFullName("Carlos","Velasco"))

/**
 * 
 * @param {string} firstName Person's name
 * @param {string} lastName Person's lastname
 * @returns greeting message from an arrow function
 */
const printFullNameArrow = (firstName, lastName) => console.log(`${firstName} ${lastName} estudiante de la Ch62 desde una Arrow Function`);

// TODO: generar una función que calcule el área de un rectángulo
// usando parámetros por defecto para largo y ancho.

const rectangleArea = (base = 4, height = 5) => console.log(`The rectangle area is: ${base*height}`);
rectangleArea(5,10);
rectangleArea(8);
rectangleArea();

// Aplicando funciones de callback
// 1. La función principal está "Cerrada" (no la tocamos más)
const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b);
};

//console.log(`Usando incorrectamente la función: ${calculate( 5, 3, 10)}`);

const sum = (a,b) => a + b;
const substract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;
const power = (a,b) => a**b;
const remainder = (a,b) => a%b;

console.log(`Usando la función suma: ${calculate( 5, 3, sum)}`);
console.log(`Usando la función resta: ${calculate( 5, 3, substract)}`);
console.log(`Usando la función multiplicación: ${calculate( 5, 3, multiply)}`);
console.log(`Usando la función división: ${calculate( 5, 3, divide)}`);
console.log(`Usando la función potencia: ${calculate( 5, 3, (a,b)=>a**b)}`); //Math.pow(a,b)
console.log(`Usando la función residuo: ${calculate( 6, 3, remainder)}`);



// Aplicar una función que calcule la potencia de un número
console.log(`Realizando una división: ${calculate(6, 3, (a, b) => a ** b ) }`); // Math.pow(a,b) 
// Aplicar una función que calcule el residuo de una devisión, para saber si 6 es divisible entre 3
console.log(`residuo de 7 entre 3 ${calculate(7, 3, (a,b)=> a%b )}`); // 1

var a = 10;
let b = 20;
const c = 30;
const d = 40;
const e = 50;
const f = 60;
const g = 70;


const cambiarValores = (a, b, c) => {
  /*

   Muchas instrucciones

  */ 
  a = 100;
  b = 200;
  c = 300;
  var d = 400;
  let e = 500;
  const f = 600;
  console.log(a, b, c);
}
