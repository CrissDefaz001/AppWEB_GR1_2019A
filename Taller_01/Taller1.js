const fs = require('fs'); // file system
const datos = fs.readFileSync('./people.json', 'utf8'); // reading JSON
const peopleJS = JSON.parse(datos); // parse to JS object

console.log("============ Ejercicio 1 - 4 ===============");
// Buscar los tipos de gender, eye_color, skin_color, hair_color:
const gender = [];
const eye_color = [];
const skin_color = [];
const hair_color = [];

function buscarGender(){ // Géneros
    for (let x in peopleJS)
        // valida que no exista para que no se repitan
        if(gender.indexOf(peopleJS[x].gender) === -1){
            gender.push(peopleJS[x].gender);
        }
    console.log("Genders:");
    console.log(gender);
}
function buscarColorOjos(){ // Color de ojos
    for (let x in peopleJS)
        if(eye_color.indexOf(peopleJS[x].eye_color) === -1){
            eye_color.push(peopleJS[x].eye_color);
        }
    console.log("Eye colors:");
    console.log(eye_color);
}
function buscarColorPiel(){ // Color de piel
    for (let x in peopleJS)
        if(skin_color.indexOf(peopleJS[x].skin_color) === -1){
            skin_color.push(peopleJS[x].skin_color);
        }
    console.log("Skin colors:");
    console.log(skin_color);
}
function buscarColorCabello(){ // Color de cabello
    for (let x in peopleJS)
        if(hair_color.indexOf(peopleJS[x].hair_color) === -1){
            hair_color.push(peopleJS[x].hair_color);
        }
    console.log("Hair colors:");
    console.log(hair_color);
}
buscarGender();
buscarColorOjos();
buscarColorPiel();
buscarColorCabello();

console.log("\n============ Ejercicio 5 ===============");
// Clasificar por genero
function byGender(){
    console.log("\nPersonajes por genero");
    let arrGenero = [];
    for(let i in gender){
        console.log("Género: ", gender[i] );
        for(let j in peopleJS) {
            if(peopleJS[j].gender === gender[i]){
                arrGenero.push(peopleJS[j].name);
            }
        }
        console.log(arrGenero);
        arrGenero = []; //limpia el arreglo para el siguiente
    }
}

// Clasificar por color de ojos
function byEyeColors() {
    console.log("\nPersonajes por color de ojos");
    let arrByEyeColor = [];
    for(let i in eye_color){
        console.log("Color de ojos: ", eye_color[i] );
        for(let j in peopleJS) {
            if(peopleJS[j].eye_color === eye_color[i]){
                arrByEyeColor.push(peopleJS[j].name);
            }
        }
        console.log(arrByEyeColor);
        arrByEyeColor = [];
    }
}
// Clasificar por color de piel
function bySkinColors() {
    console.log("\nPersonajes por color de piel");
    let arrBySkinColor = [];
    for(let i in skin_color){
        console.log("Color de piel: ", skin_color[i] );
        for(let j in peopleJS) {
            if(peopleJS[j].skin_color === skin_color[i]){
                arrBySkinColor.push(peopleJS[j].name);
            }
        }
        console.log(arrBySkinColor);
        arrBySkinColor = [];
    }
}
// Clasificar por color de cabello
function byHairColors() {
    console.log("\nPersonajes por color de cabello");
    let arrByHairColor = [];
    for(let i in hair_color){
        console.log("Color de cabello: ", hair_color[i] );
        for(let j in peopleJS) {
            if(peopleJS[j].hair_color === hair_color[i]){
                arrByHairColor.push(peopleJS[j].name);
            }
        }
        console.log(arrByHairColor);
        arrByHairColor = [];
    }
}

byGender();
byEyeColors();
bySkinColors();
byHairColors();

console.log("\n============ Ejercicio 6 ===============");
// Existe el personaje con cada letra del abecedario?
function personajeXLetra() {
    const arreglo_res = {
        a: false, b: false, c: false, d: false, e: false,
        f: false, g: false, h: false, i: false, j: false,
        k: false, l: false, m: false, n: false, o: false,
        p: false, q: false, r: false, s: false, t: false,
        u: false, v: false, w: false, x: false, y: false,
        z: false
    };
    for(let i in peopleJS){
        // capturar la primera letra de los nombres:
        let primera_letra = peopleJS[i].name.substring(0, 1).toLowerCase();
        arreglo_res[primera_letra]=true;
    }
    console.log('Existen personajes por cada letra del abecedario?');
    console.log(arreglo_res);
}
personajeXLetra();

console.log("\n============ Ejercicio 7 ===============");
// Sumatoria de la propiedad "mass" y la propiedad "height".
function calcularMasaAltura() {
    let totalMass = 0;
    let totalHeight = 0;
    for(let i in peopleJS){
        if(!isNaN(peopleJS[i].mass)){
            totalMass+=Number(peopleJS[i].mass);
        }
        if(!isNaN(peopleJS[i].height)){
            totalHeight+=Number(peopleJS[i].height);
        }
    }
    console.log('Sumatoria Masa: ', totalMass);
    console.log('Sumatoria Altura: ', totalHeight);
}
calcularMasaAltura();

console.log("\n============ Ejercicio 8 - 9 ===============");
// Todos los personajes han utilizado vehiculos?
// Todos los personajes han utilizado naves estelares?
function vehicleOrStarship(){
    let todosV = true;
    let todosN = true;
    for(let i in peopleJS){
        console.log("Personaje: ",peopleJS[i].name );
        if(peopleJS[i].vehicles.length === 0){
            todosV = false;
            console.log("   Ha utilizado vehiculo");
        }else{
            console.log("   No ha utilizado vehiculo");
        }
        if(peopleJS[i].starships.length === 0){
            todosN = false; // No todos han utilizado vehiculos
            console.log("   Ha utilizado una nave espacial");
        }else{
            console.log("   No ha utilizado una nave espacial");
        }
    }
    // Si todos han utilizado vehiculo...
    if(todosV){
        console.log("\nTodos utilizaron vehiculos");
    }else{
        console.log("\nNo todos utilizaron vehiculos");
    }
    if(todosN){
        console.log("Todos utilizaron naves espaciales");
    }else{
        console.log("No todos utilizaron naves espaciales");
    }
}
vehicleOrStarship();

console.log("\n============ Ejercicio 10 ===============");
// Calcular en cuantos films han aparecido cada personaje
function contarFilms(){
    for(let i in peopleJS) {
        console.log("Personaje: ", peopleJS[i].name);
        console.log("Número de apariciones:", peopleJS[i].films.length+"\n");
    }
}
contarFilms();



