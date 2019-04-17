
// funciones anónimas
function saludo() {

}

var nombre = function () {};
console.log(saludo()+nombre());

var mensaje =
{
    texto: function () { // funcion anónima
        return "Buen día"
    }
}
console.log(mensaje);

var arreglo= [function () {

}];
console.log(arreglo)
// No usar funciones anónimas sin parámetros o sin comparaciones
console.log(typeof saludo);
console.log(saludo); // definicion de la funcion
console.log(saludo()); // ejecucion de la funcion

// var, let, const -> declarar variables
/*
var i = 8;
(function verNumero() {
    for (var i=0; i<6; i++){
        console.log(i)
    }
})();
console.log(i);
*/

var i = 8;
(function verNumero() {
    for (let i=0; i<6; i++){
        console.log(i)
    }
})();
console.log(i);

// en JS al nom declarar correctamenete, se puede reasignar
// un valor a una variable sin que nos lo notifique

const arregloLetras = ['A','B','C',];
console.log(arregloLetras);
arregloLetras.push('E');
console.log(arregloLetras);

//arregloLetras{}; // error, ya no puede ser redefinido,
//arregloLetras[]; // porque fue declarado como const

const datos = {
    nombre: 'Criss',
    ciudad: 'Quito'
};

console.log(datos);
// datos.nombre='Luis'; // genera un error
console.log(datos.nombre);

const sueldo = 30;
// sueldo = 24; // genera otro error

function doble(n) {
    return n*2;
}
console.log(doble(3))
// fat arrow: expresiones más cortas
// que la sintaxis convencional
// es equivalente al this en java
// siempre son anónimas
// [parametros], ..... [parametrosN]=> {sentencias}
// [parametros], ..... [parametrosN]=> expresion
var dobleN = n=>n*2

console.log(dobleN(3));

const elementos=['Ag','Ha','Cl'];
var salida = elementos.map(function (elemento) {
    return elemento.length;
});

var salida_2 = elementos.map((elemento)=> {return elemento.length});
console.log(salida);
console.log(salida_2);

const sumaNumeros=(num_1,num_2) => {return num_1+num_2};
function sumar(num_1,num_2) {
    return num_1+num_2;
}

console.log(sumaNumeros(2,1));
console.log(sumar(2,1));

const cuadrado= x => x*x;
// const cuadrado= (x) => x*x; // lo mismo de arriba
console.log(cuadrado(5))

const arregloElementos=elementos
    .map(
        valorActual =>{
            return valorActual + '.-' // a cada elemento del arreglo
        }
    ).forEach(
        valorNuevo => console.log(valorNuevo)
    );
console.log(arregloElementos);
// map: mutar cada elemento del arreglo.

const arregloNumeros=[1,2,3,4,5,6,7,8,9,10]
const filtrarNumeros=arregloNumeros
    .filter(n=>(n%2===0)); // filtra los pares
                            // '===':
console.log(filtrarNumeros);
console.log(1=='1'); // true: misma direccion de memoria, es un numero
console.log(1==='1'); // false: numeros y cadenas no se pueden comparar
console.log(''!== 0); // no se puede hacer esto

const resultadoEvery = arregloNumeros
    .every(n => n>1); //¿Todos los elementos > 1?
console.log(resultadoEvery); // si cumplen todos: true

// retornar indice de arreglo de un elemento
const resultadoFilterIndex = arregloNumeros
    .findIndex(n=>n==7);
console.log(resultadoFilterIndex);

const resultadoFind = arregloNumeros
    .find(n=>(n===7));
console.log(resultadoFind);

