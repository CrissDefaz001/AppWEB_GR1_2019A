var nombre;
var Nombre;
var numVisitas;

nombre = 'Criss';
console.log(nombre);
//alert(nombre); ->> en navegador


let y=12;
console.log(y);

var edad = 15; //number
var sueldo = 118.012; //number
var apellido = 'Sánchez'; //string
var soltero = false; //boolean
var hijos = null; //object
var extremidades; //undefined
var fecha = new Date(); //object

console.log(soltero); // imprime variable soltero
console.log(hijos); // variable hijos
console.log(fecha); //imprime la fecha actual
console.log('Fecha: ', fecha); // concatena una cadena

//Objetos
var estudiante = {
    'nombre': 'Criss',
    'apellido':'Defaz',
    'edad': 24,
    'sueldo': 420,
    'soltero': true
};
console.log(estudiante);
console.log(estudiante.nombre); //accede solo al nombre del objeto

//Objetos de objeto
var estudiante2 ={
    'nombre': 'Criss',
    'apellido':'Defaz',
    'edad': 24,
    'sueldo': 420,
    'soltero': true,
    'materias': {
        'básica': 'Álgebra',
        nota: 15,
        carrera: 'Sistemas'
    }
};

console.log(estudiante2);
console.log(estudiante2.materias.carrera);

if (true){
    console.log("Verdadero");
}else{
    console.log("Falso");
}

if (false){
    console.log("Verdadero");
}else{
    console.log("Falso");
}

// Falsy: retornará falso porque se desconoce de que tipo es
if (undefined){
    console.log("Verdadero");
}else{
    console.log("Falso");
}

// Truthy: todo lo que se declara es verdadero. Por tanto, imprimirá Verdadero.
if (new Date()){
    console.log("Verdadero"); // 0 -> Falso, 1,-1 -> Verdadero
}else{
    console.log("Falso");
}
