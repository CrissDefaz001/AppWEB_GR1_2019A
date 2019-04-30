// Servidor http:

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// var pdf = require('phantom'); // mostrar en pdf

const server = http.createServer((req, res)=>{ // Parámetros del server.
    res.statusCode=200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hola Mundo');
/*    res.write(
        '<html><head></head><body></body><h1>Bienvenido</h1>' +
        '</body></html>'
    );*/
});

server.listen(port, hostname,()=>{
    console.log(`Server running at http//${hostname}:${port}/`)
});

/*
Terminal commands:
npm init
npm install modules ->> instala los módulos necesarios para gestionar las páginas
npm install panthom ->> paquete para pdf
No es necesario copiarlos cuando se exporta el proyecto, pues se generan automáticamente.
*/

/*
pdf.create().then(function (pdf){
    pdf.createPage().then(function (page){
        page.open(`${hostname}: ${port}/`).then(function (status) {
            page.render('index.pdf').then(function (){
                console.log('page render')
            })
        })
    })
});
*/
