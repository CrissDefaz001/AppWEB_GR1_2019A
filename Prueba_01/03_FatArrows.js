console.log("Holaaa!!");

const triple = n=>n*3;
console.log(triple(5));

const frutas = ['Piña','Fresa','Manzana','Achotillo','Pera','Kiwi',
    'Aguacate','Arándano','Uva','Grosella','Naranja','Pepino',
    'Frutilla','Ciruela','Plátano','Coco','Granadilla','Guaba',
    'Melon','Limon','Papaya','Mango','Sandìa','Cereza'];
// Imprime array de bolean de frutas que empiezn con P
const salida = frutas.map(f=> {return f.substring(0,1)==='P'});
console.log(salida);
// Imprime array de frutas que empiezn con P
const salida2 = frutas.filter(f=> {return f.substring(0,1)==='P'});
const salida3 = frutas.filter(f=> (f.substring(0,1)==='P'));
console.log(salida2);
console.log(salida3);
// Primer elemento del arreglo con C
const salida4 = frutas.find(f=> (f.substring(0,1)==='C'));
console.log(salida4);

const arregloNumeros=[41,52,23,64,85,60,78,81,90,10];

const resultadoFilterIndex = arregloNumeros.findIndex(n=>(n===85));
console.log(resultadoFilterIndex);

const resultadoEvery = arregloNumeros.every(n => n>1);
console.log(resultadoEvery);



/*
const names2 = new Set(movieJS.results.map(gen => gen['name'])); // Eliminando repetidos
console.log('Names:', names2);

const genders2 = new Set(peopleJS.map(gen => gen['gender'])); // Eliminando repetidos
console.log('Genders:', genders);
console.log(typeof (genders2));
console.log('Genders2:', genders2);

arr = Array.from(genders2); // Object to array
arr2 = [...genders2]; // otra forma de convertir a array
console.log(typeof (arr));
console.log(arr);
console.log(arr2);
*/
