<<<<<<< HEAD
=======
console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/


/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

console.log( saludar("Johan") ); // undefined porque la función saludar() no retorna nada

function saludar(nombre){
    console.log(`Hola ${nombre}, qué vas a comer hoy?`);
   
}


>>>>>>> main
/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.
<<<<<<< HEAD
=======

>>>>>>> main
sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/


<<<<<<< HEAD
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
=======

/**
 * Función que recibe nombre y apellido y retorna el nombre completo
 * @param {string} firstName nombre de la persona
 * @param {string} lastName apellido de la persona
 * @returns concatenación del nombre y apellido de la persona en la cohorte Ch62
*/
const printFullName = function (firstName, lastName) {
  return `${firstName} ${lastName} estudiante de la Ch62`;
};

console.log( printFullName("Johan", "Gonzalez") );
/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una sola instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Convertir la función printFullName a función flecha
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido} estudiante de la Ch62`;

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

const makeCoffe = ( type = "Americano" ) => `Preparando un café ${type}`;

console.log( makeCoffe("Latte") ); // Preparando un café Latte
console.log( makeCoffe() ); // Preparando un café Americano
>>>>>>> main

// TODO: generar una función que calcule el área de un rectángulo
// usando parámetros por defecto para largo y ancho.

<<<<<<< HEAD
const rectangleArea = (base = 4, height = 5) => console.log(`The rectangle area is: ${base*height}`);
rectangleArea(5,10);
rectangleArea(8);
rectangleArea();
=======
// Ejemplo de uso de default parameters
console.log(`Vales 1000, estoy diciendo que vales: ${parseInt("1000")}`); // 1000
console.log(`Vales 1000 base 2, estoy diciendo que vales: ${parseInt("1000", 2)}`); // 8


/*
Pase de datos:
- Por valor: Se crea una copia independiente del dato. 
Si modificas la copia, el original NO cambia.
- Por referencia: Se pasa la dirección de memoria (referencia), 
no el dato en sí. Si modificas algo a través de esa referencia, el original SÍ cambia.
 */

/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

 // Mal diseño: Cada vez que quieras una operación nueva, modificas esta función.
const calculateBad = (a, b, type) => {
    if (type === "sum") return a + b;
    if (type === "subtract") return a - b;
    // Si quiero dividir, tengo que editar este archivo y agregar otro if...
};

console.log( calculateBad(5, 3, "sum") ); // 8
console.log( calculateBad(5, 3, "subtract") ); // 2
>>>>>>> main

// Aplicando funciones de callback
// 1. La función principal está "Cerrada" (no la tocamos más)
const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b);
};

<<<<<<< HEAD
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
=======
// console.log(`Usando incorrectamente la función: ${calculate( 5, 3, "sum")}`); // operationFunction is not a function

// 2. Definimos operaciones básicas
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
// Crear una función que sume dos números
const sum = (a, b) => a + b;
const divide = (a, b) => a / b;


console.log(`Realizando una resta: ${calculate(5, 3, subtract)}`); // 2
console.log(`Realizando una multiplicación: ${calculate(5, 3, multiply )}`); // 15
// Aplicar a la función calculate la función suma
console.log(`Realizando una suma: ${calculate(5, 3, sum )}`); // 8
console.log(`Realizando una división: ${calculate(6, 3, divide )}`); // 2

// Aplicar una función que calcule la potencia de un número
console.log(`Realizando una división: ${calculate(6, 3, (a, b) => a ** b ) }`); // Math.pow(a,b) 
// Aplicar una función que calcule el residuo de una devisión, para saber si 6 es divisible entre 3
>>>>>>> main
