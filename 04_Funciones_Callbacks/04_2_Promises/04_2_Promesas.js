const fs = require('fs'); // solicitando usar una libreria

const promesaLectura = new Promise(
    (resolve) => {
        fs.readFile('archivo.txt', 'utf-8',
            (err, contenidoArchivo) => {
                if (err) {
                    resolve('');
                } else {
                    resolve(contenidoArchivo);
                }
            })
    }
);

const promesaEscritura = (contenidoLeido) => {
    return new Promise(
        (resolve, reject) => {
            const contenido = contenidoLeido + ' Criss';
            fs.writeFile('archivo.txt', contenido,
                (err) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(contenido)
                    }
                })
        }
    )
};

promesaLectura
    .then((contenidoArchivo) => {
            console.log("Ok", contenidoArchivo);
            return contenidoArchivo;
        }
    )
    .then((contenido) => {
            console.log("Contenido Completo:", contenido);
            return promesaEscritura(contenido);
        }
    )
    .catch((resultadoError) => {
            console.log("Error generado: ", resultadoError);
        }
    );

// callbacks: haz esto, luego eso. Algo sìncrono
// promise: calcula esto (usando esto)
// La fprma de manejar una promess, implica como se va a realiar algo asìncrono
// (respuesta de servidor, base de datos, etc),ç

//then: decide que hacer con el resultado
//catch:
// Promesa: nombrePromesa (parametros)