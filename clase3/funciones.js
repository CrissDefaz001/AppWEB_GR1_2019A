
// Funciones en JavaScript

function holaMundo() {
    console.log("Hola Mundo !!")
}

// holaMundo()
// console.log(holaMundo())

// Las funciones pueden devilver un valor indefinido. No siempre lo esperado

// función con parámetros
function sumar(num_1, num_2){
    var esNumero_num_1 = typeof num_1 == "number";
    var esNumero_num_2 = typeof num_2 == "number";

    if(esNumero_num_1 && esNumero_num_2){
        return num_1 + num_2
    }else{
        console.log("error");
    }

}

// console.log(sumar(1,2))

// sumar solo los numeros de un arreglo:
function sumarNumerosArreglo(numeros) {
    var parametroDistintoDeNumber = false;
    var resultado = 0;
    for (var i=0; i<numeros.length;i++){
        var esNumero = typeof num_1 == "number";
        if(esNumero){
            parametroDistintoDeNumber==true;
        }else{
            resultado=resultado+numeros[i];
        }
    }
    var respeusta={
        esNumero:parametroDistintoDeNumber,
        resultado:resultado
    }
    return respeusta;

}
// console.log(sumarNumerosArreglo(1,2,3,4));


function cambiarMayusculas(nombre, funcion) {
    return  `Hola ${funcion(nombre)}`;
}

// No hay problema si una funcion es definida despues de ser invoacada.
function convertirMayusculas(texto) {
    return texto.toUpperCase();
}
console.log(cambiarMayusculas("criss", convertirMayusculas()))


function convertiraMinusculas(texto) {
    return texto.toLowerCase();
}

function agregarPuntoFinal(texto) {
    return texto +".";
}
console.log(cambiarMayusculas("criss", convertiraMinusculas()))


function letraInicioPalabraNayuscula(texto){

    var letrainicioMayuscula = texto[0].toUpperCase();
    var restoPalabra =texto.slice(1,texto.length)
    return letrainicioMayuscula + restoPalabra;
}

console.log(cambiarMayusculas("criss", letraInicioPalabraNayuscula()))


