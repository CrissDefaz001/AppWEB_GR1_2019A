
// Funciones JavaScript

function holaMundo() {
    console.log("Hola Mundo !!");
}

holaMundo();
//console.log(holaMundo()); //undefined
// Las funciones pueden devolver un valor indefinido. No siempre lo esperado

// función con parámetros:
function sumar(num_1, num_2){
    let esNumero_num_1 = typeof num_1 == "number";
    let esNumero_num_2 = typeof num_2 == "number";

    if(esNumero_num_1 && esNumero_num_2){
        return num_1 + num_2;
    }else{
        console.log("error");
    }
}
console.log("suma: ",sumar(10,23));

// Función para sumar solo los numeros de un arreglo:
function sumarNumerosArreglo(numeros) {
    let parametroDistintoDeNumero = false;
    let resultado = 0;
    for (let i=0; i<numeros.length;i++){
        let esNumero = typeof numeros[i] == "number";
        if(esNumero){
            resultado+=numeros[i];
        }else{
            parametroDistintoDeNumero=true;
        }
    }
    let respuesta;
    respuesta = {
        noEsNumero: parametroDistintoDeNumero,
        resultado1: resultado
    };
    return respuesta;
}
console.log("Suma en arreglo1: ",sumarNumerosArreglo([1,2,3,4,5]));
console.log("Suma en arreglo2: ",sumarNumerosArreglo([1,"2",3,4,5])); //error

// Funcion que llama otra funcion por parámetros, concatenación:
function invocarFunciones(nombre, funcion) {
    return  `Hola ${funcion(nombre)}`;
}
console.log(invocarFunciones("criss", convertirMayusculas));
// No hay problema si una funcion es definida despues de ser invoacada.
function convertirMayusculas(texto) {
    return texto.toUpperCase();
}

function convertirMinusculas(texto) {
    return texto.toLowerCase();
}
console.log(invocarFunciones("criss", convertirMinusculas));

function agregarPuntoFinal(texto) {
    return texto +".";
}
console.log(convertirMinusculas("un excelente dia ", agregarPuntoFinal));
console.log(invocarFunciones("un excelente dia", agregarPuntoFinal));

function letraInicioPalabraNayuscula(texto){

    let letrainicioMayuscula = texto[0].toUpperCase();
    let restoPalabra =texto.slice(1,texto.length);
    return letrainicioMayuscula + restoPalabra;
}

console.log(invocarFunciones("criss", letraInicioPalabraNayuscula));
