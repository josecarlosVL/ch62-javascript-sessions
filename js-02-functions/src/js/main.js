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


var a = 10;  //variable global, no variable de funcion
let b = 20;
const c = 30;
const d = 40;
const e = 50;
const f = 60;
const g = 70; //El alcance de esta variable es global, entra en la funcion cambiarValores porque no hay otra variable g dentro de la funcion

const cambiarValores = (a, b, c) => {  //No confundir, aunque se llamen igual, estas variables a,b,c son locales a la funcion cambiarValores, no son las mismas que las globales declaradas arriba

  /*

  Muchas instrucciones

  */
    a = 100; //Cambia solo la copia local, no la variable global
    b = 200; //Cambia solo la copia local, no la variable global
    c = 300; //Cambia solo la copia local, no la variable global
    var d = 400; //Variable local a la funcion
    let e = 500; //Variable local a la funcion
    const f = 600; //Variable local a la funcion
    console.log (a,b,c);

};
