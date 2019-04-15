// Clase 3
//crear arreglos con elementos en JavaScript

var arreglo = new Array("elemento1", "elemento2");
console.log(arreglo);

var arreglo_2 = Array('elemento1', 'elemento2');
console.log(arreglo_2);

var arreglo_3 = ['elemento1', 'elemento2'];
console.log(arreglo_3);
/*
// crear arreglos sin elementos
//var arreglo_4 = new Array(Array.length);
//var arreglo_5 = Array(Array.lengt)];

// resultados similares
var arreglo_4_2 = [];
arreglo_4_2.length=Array.length;
*/
console.log("\n")
var miArreglo=[];
console.log(miArreglo);

miArreglo.push(4);
console.log(miArreglo);

miArreglo.pop();
console.log(miArreglo);

console.log("\n")
// arreglos numericos
var numeros =[1,2,3,4];
console.log(numeros);

//splice: elimiina elementos existentes y agregar otros
numeros.splice(1,3,1.1);
console.log(numeros);

var indice = numeros.indexOf(2);
console.log(2);

var indiceUnoCuatro = numeros.indexOf(1,4);
console.log(indiceUnoCuatro);

var mascotas = ["perro","gato","loro"]
console.log(mascotas);

for (var i =0; i < mascotas.length; i++){
    console.log(mascotas[i])
}

// foreach
mascotas.forEach(function (element) {
    console.log(element);
});

//join
var lista = mascotas.join("-");
console.log(lista);

var vocales = ["a","e","i","o","u"]
vocales=vocales.concat("1","2","3","4");
console.log(vocales);

// muestra el primer elemento
var inicio = vocales.shift();
console.log(inicio);

// eliminar pimer 
console.log(vocales);
var removerInicio = vocales.unshift();
console.log(removerInicio);

// Revertir arreglo
var reverseVocales = vocales.reverse();
console.log(reverseVocales);

var mascotasOrdenado = mascotas.sort();
console.log(mascotasOrdenado);

var mascotasMap = mascotas.map(function(item){
    return item.toUpperCase();
});
console.log(mascotasMap);

var arreglo_10 = ["e",3,"Criss",5];
var arreglo_11 = arreglo_10.filter(function(item){
    return typeof item == 'number';
})
console.log(arreglo_10);
console.log(arreglo_11);

function esNumero(value){
    return typeof value == 'number';
}

console.log(arreglo_10.every(esNumero));
console.log(arreglo_11.every(esNumero));

console.log(arreglo_10.some(esNumero));
console.log(arreglo_11.some(esNumero));

var arreglo_14=['1','2','3'];
console.log(arreglo_14.some(esNumero)); 

// vincular, (no join)
var datos={
    nombre:'Criss',
    cedula: 1723464465,
    edad: 25
}

var cuenta={
    numero:20227,
    valor: 234,
    tipo: 'ahorros'
}

var datosCuenta={
    ...datos,
    ...cuenta
}

console.log(datosCuenta);

var atributodsDatosCuenta=Object.keys(datosCuenta);

console.log(atributodsDatosCuenta);
console.log(atributodsDatosCuenta[0]);


// Chrome: clic derecho > inspeccioanr > consola


