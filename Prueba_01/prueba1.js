const fs = require('fs');
const data = fs.readFileSync('./movie.json','utf8');
const movieJS =JSON.parse(data);
console.log(movieJS.results.name);

console.log('1) Buscando names ================');
const names = new Set(movieJS.results.map(name => name['name']));
console.log('Names:', names);

console.log('\n2) Buscando types ================');
const types = new Set(movieJS.results.map(typ => typ['type']));
console.log('Types:', types);

console.log('\n3) Buscando genders ================');
const genders = new Set(movieJS.results.map(gen => gen['gender']));
console.log('Genders:', genders);

console.log('\n4) Buscando status ================');
const status = new Set(movieJS.results.map(st => st['status']));
console.log('Status:', status);

console.log('\n5) Buscando names en Origin =======');
const namesOr = new Set(movieJS.results.map(name => name.origin['name']));
console.log('Names:', namesOr);

console.log('\n6) Buscando names en Location =======');
const namesLoc = new Set(movieJS.results.map(name => name.location['name']));
console.log('Names:', namesLoc);

// Clasificaciones
console.log('\n7) Clasificando personajes =======');
console.log('========= Personajes por types =======');

// personajes por types
arrTypes = [...types]; // Object to array
function byTypes(){
    let  tipos = [];
    for(let i in arrTypes){
        console.log("Type: ", arrTypes[i] );
        for(let j in movieJS.results) {
            if(movieJS.results[j].type === arrTypes[i]){
                tipos.push(movieJS.results[j].name);
            }
        }
        console.log(tipos);
        tipos = []; //limpia el arreglo para el siguiente
    }
}
byTypes();
console.log('\n========= Personajes por genders =======');
arrGen = [...genders]; // Object to array
function byGenders(){
    let  tipos = [];
    for(let i in arrGen){
        console.log("Type: ", arrGen[i] );
        for(let j in movieJS.results) {
            if(movieJS.results[j]['gender']=== arrGen[i]){
                tipos.push(movieJS.results[j].name);
            }
        }
        console.log(tipos);
        tipos = []; //limpia el arreglo para el siguiente
    }
}
byGenders();

console.log('\n========= Personajes por Status =======');
arrStatus = [...status]; // Object to array
function byStatus(){
    let  tipos = [];
    for(let i in arrStatus){
        console.log("Status: ", arrStatus[i] );
        for(let j in movieJS.results) {
            if(movieJS.results[j].status === arrStatus[i]){
                tipos.push(movieJS.results[j].name);
            }
        }
        console.log(tipos);
        tipos = []; //limpia el arreglo para el siguiente
    }
}
byStatus();

byGenders();
console.log('\n========= Personajes por Origins =======');
arrOrigins = [...namesOr]; // Object to array
function byOrigins(){
    console.log("\nPersonajes por Origin");
    let  tipos = [];
    for(let i in arrOrigins){
        console.log("Origin: ", arrOrigins[i] );
        for(let j in movieJS.results) {
            if(movieJS.results[j].origin.name === arrOrigins[i]){
                tipos.push(movieJS.results[j].name);
            }
        }
        console.log(tipos);
        tipos = []; //limpia el arreglo para el siguiente
    }
}
byOrigins();

console.log('\n========= Personajes por Locations =======');
arrLoc = [...namesLoc]; // Object to array
function byLocations(){
    console.log("\nPersonajes por Location");
    let  tipos = [];
    for(let i in arrLoc){
        console.log("Origin: ", arrLoc[i] );
        for(let j in movieJS.results) {
            if(movieJS.results[j].location.name === arrLoc[i]){
                //const namesOr = new Set(movieJS.results.map(name => name.origin['name']));
                tipos.push(movieJS.results[j].name);
            }
        }
        console.log(tipos);
        tipos = []; //limpia el arreglo para el siguiente
    }
}
byLocations();


console.log('\n8) Abecedario de personajes =======');
function personajeXLetra() {
    const arreglo_res = {
        a: false, b: false, c: false, d: false, e: false,
        f: false, g: false, h: false, i: false, j: false,
        k: false, l: false, m: false, n: false, o: false,
        p: false, q: false, r: false, s: false, t: false,
        u: false, v: false, w: false, x: false, y: false,
        z: false
    };
    for(let i in movieJS.results){
        // capturar la primera letra de los nombres:
        let primera_letra = movieJS.results[i].name.substring(0, 1).toLowerCase();
        arreglo_res[primera_letra]=true;
    }
    console.log('Existen personajes por cada letra del abecedario?');
    console.log(arreglo_res);
}
personajeXLetra();

console.log('\n9) Personajes con status vivo =======');
function isAlive(){
    for(let i in movieJS.results){
        console.log("Personaje: ",movieJS.results[i].name );
        if(movieJS.results[i].status === 'Alive'){
            console.log("   Está vivo");
        }else{
            console.log("   No está vivo");
        }
    }
}
isAlive();

console.log('\n10) Episodios por personaje =======');

function contarFilms(){
    for(let i in movieJS.results) {
        console.log("Personaje: ", movieJS.results[i].name);
        console.log("Número de episodios:", movieJS.results[i].episode.length+"\n");
    }
}
contarFilms();