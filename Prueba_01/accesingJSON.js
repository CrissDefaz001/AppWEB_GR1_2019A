const fs = require('fs');
const data = fs.readFileSync('./movie.JSON','utf8');
const movieJS = JSON.parse(data);

console.log('\n*=*=*=*=*= Buscando nombres =*=*=*=*=*');
//['results'].forEach( info => {console.log(info['name'])}); // forma 1
arrName = [... new Set(movieJS['results'].map(gen => (gen['name'])))]; // forma 2
console.log('Names:\n', arrName);

console.log('\n*=*=*=*=*= Buscando types =*=*=*=*=*');
arrType = [... new Set(movieJS['results'].map(gen => (gen['type'])))];
console.log('Types:\n', arrType);

console.log('\n*=*=*=*= Buscando Genders =*=*=*=*');
arrGen = [... new Set(movieJS['results'].map(gen => (gen['gender'])))];
console.log('Genders:\n', arrGen);

console.log('\n*=*=*=*= Buscando Status =*=*=*=*');
arrStatus = [... new Set(movieJS['results'].map(gen => (gen['status'])))];
console.log('Status:\n', arrStatus);

console.log('\n*=*=*=*= Buscando name Origins =*=*=*=*');
arrNameOr = [... new Set(movieJS['results'].map(nameOr =>(nameOr['origin']['name'])))];
console.log('Origin name:\n', arrNameOr);

console.log('\n*=*=*=*= Buscando name Location =*=*=*=*');
arrNameLoc = [... new Set(movieJS['results'].map(nameOr =>(nameOr['location']['name'])))];
console.log('Location name:\n', arrNameLoc);

console.log('\n*=*=*=*= Personajes por cada type =*=*=*=*');
arrType.forEach(type1 =>{
    console.log('Type: ',type1);
    movieJS['results'].map(res => {
        if (res['type'] === type1){
            console.log('\t',res['name'])
        }
    })
});

console.log('\n*=*=*=*= Personajes por cada genero =*=*=*=*');
arrGen.forEach(gender =>{
    console.log('Genero: ',gender);
    movieJS['results'].map(res => {
        if (res['gender'] === gender){
            console.log('\t',res['name'])
        }
    })
});

console.log('\n*=*=*=*= Personajes por cada status =*=*=*=*');
arrStatus.forEach(stat =>{
    console.log('Status: ',stat);
    movieJS['results'].map(res => {
        if (res['status'] === stat){
            console.log('\t',res['name'])
        }
    })
});

console.log('\n*=*=*=*= Personajes por Origin name =*=*=*=*');
arrNameOr.forEach(nameOr =>{
    console.log('Origin name: ',nameOr);
    movieJS['results'].map(res => {
        if (res['origin']['name'] === nameOr){
            console.log('\t',res['name'])
        }
    })
});

console.log('\n*=*=*=*= Personajes por Location name =*=*=*=*');
arrNameLoc.forEach(nameLoc =>{
    console.log('Location name: ',nameLoc);
    movieJS['results'].map(res => {
        if (res['location']['name'] === nameLoc){
            console.log('\t',res['name'])
        }
    })
});

console.log('\n*=*=*=*= Abecedario de personajes =*=*=*=*');
const arr_res = {
    a: false, b: false, c: false, d: false, e: false, f: false, g: false,
    h: false, i: false, j: false, k: false, l: false, m: false, n: false,
    o: false, p: false, q: false, r: false, s: false, t: false, u: false,
    v: false, w: false, x: false, y: false, z: false
};
movieJS['results'].map(
    res => {
        const letra_ini = res['name'].substring(0,1).toLowerCase();
        arr_res[letra_ini] = true
    }
);
console.log(arr_res);

console.log('\n*=*=*=*= Todos los personajes están vivos? =*=*=*=*');
arrAlive = [... new Set(movieJS['results'].map(res =>{
    if (res['status'] === 'Alive'){
        return res['name']
    }
}))];
if(arrName.length === arrAlive.length){
    console.log('Todos están vivos')
}else{
    console.log('No todos están vivos\nTotal Alive: ',arrAlive.length)
}

console.log('\n*=*=*=*= Episodios por personaje =*=*=*=*');
arrName.forEach(per => {
    movieJS['results'].map(res => {
        if (res['name'] === per) {
            console.log("\nPersonaje: ", res['name']);
            console.log("\tNum. episodios: ", res['episode'].length);
        }
    })
});
