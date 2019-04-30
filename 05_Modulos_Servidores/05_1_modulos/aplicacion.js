// Ventana principal

// invocando desde otros directorios
const suma = require('./sumaDosNumeros');
const tiempoA = require('./tiempo.js');
const numeros = require('./numeros.js');
const calculadora = require('./calculadora/calculadora');
//Para llamar de carpeta: './carpeta/archivo.js'

console.log(suma.nombreApp, suma.sumar(13,4));
console.log("Tiempo: ", tiempoA.getFullYear());
console.log("Numeros: ", numeros+1);

console.log(calculadora.nombreApp);
console.log("Suma: ", calculadora.suma(30,6));
console.log("Resta: ", calculadora.resta(30,6));
console.log("Multiplicacion: ", calculadora.producto(30,6));
console.log("Division: ", calculadora.division(30,6));
