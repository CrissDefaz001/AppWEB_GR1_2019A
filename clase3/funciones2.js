
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

arregloLetras{}; // error, ya no puede ser redefinido,
arregloLetras[]; // porque fue declarado como const

const datos = {
    nombre: 'Criss',
    ciudad: 'Quito'
};

console.log(datos);
datos.nombre='Luis'; // genera un error
console.log(datos.nombre);

const sueldo = 30;
sueldo = 24; // genera otro error



