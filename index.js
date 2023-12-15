//ARRAYS
//1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío
let arrayVacio = [];

//2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)
let arrayNumerosPares = [0, 2, 4, 6, 8];

//4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//FUNCIONES
//5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma
const suma = (a, b) => {
    return a + b;
};

//6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)
const potenciacion = (a, b) => {
    let potenciar = 1
    for (let i = 0; i < b; i++) {
        potenciar *= a
    };
    return potenciar;
};

//7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]
const separarPalabras = (separe) => {
    let splitString = separe.split(" ");
    return splitString;
};

//8.- Crea la función repetirString que acepte como argumento un string y un número y devuelva un string que sea el resultado de concatenar el primer string el número dado de veces
const repetirString = (texto, num) => {
    if (num <= 0) {
        return "";
    };
    let concatena = "";
    for (let i = 0; i < num; i++) {
        concatena = concatena.concat(texto);
    };
    return concatena;
};

//9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es.

const esPrimo = (a) => {

    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return false;
        };
    };
    return true;
};

//MEZCLANDO ARRAYS CON FUNCIONES
//10.-  Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor
const ordenarArray = (menoraMayor) => {
    menoraMayor.sort((a, b) => {
            return a - b;
        });
    return menoraMayor;
};

//11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares.
const obtenerPares = (pares) => {
    let arrayPares = [];
    for (let i = 0; i < pares.length; i++){
        if (pares[i] % 2 === 0){
            arrayPares.push(pares[i]);
        };
    };
    return arrayPares;
};

//12.- Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'
const pintarArray = (arrayaString) => {
    return `[${arrayaString.map(String).join(", ")}]`;
};

//13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un array en el que se haya aplicado la función a cada elemento del array
const arrayMapi = (arr, func) =>{
    return arr.map(func);
};

//14.- Crear la función eliminarDuplicados que acepte como argumento un array y devuelva un array en el que se hayan eliminado los duplicados
const eliminarDuplicados = (arr) =>{
    let unq = [];
    for (let elm of arr){
        if (!unq.includes(elm)){
            unq.push(elm);
        };
    };
    return unq;
};

//ITERACIONES
//ARRAYS
//15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
let holaMundo = ["Hola", "Mundo"];

//17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'.
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

//18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays = [[756, "nombre"], [225, "apellido"], [298, "direccion"]];

//FUNCIONES
//19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación
var multiplicacion = (a, b) => {
    return a * b;
};

//20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division
var division = (a, b) => {
    return a / b;
};

//21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
const esPar = (a) => {
    if (a % 2 === 0){
        return true;
    };
    return false;
};

//22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)
const arrayFunciones = [
    function suma(a, b) {
        return a + b;
    },
    function resta(a, b) {
        return a - b;
    },
    function multiplicacion(a, b) {
        return a * b;
    }
];

//MEZCLANDO ARRAYS CON FUNCIONES
//23.-  Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
const ordenarArray2 = (deMenaMay) => {
    return deMenaMay.sort((a, b) => {
        return b - a;
    });
};

//24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
const obtenerImpares = (arrNum) => {
    return arrNum.filter((num) => {
        return num % 2 !== 0;
    });
};

//25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
const sumarArray = (plus) =>{
    let sumar = 0;
    for (let i = 0; i < plus.length; i++){
        sumar += plus[i];
    };
    return sumar;
};

//26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array:  [2, 3, 4] resultado: 24
const multiplicarArray = (multiply) => {
    let por = 1;
    for (let i = 0; i < multiply.length; i++) {
        por *= multiply[i];
    }
    return por;
};