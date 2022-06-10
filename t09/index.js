// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston

const logger = require('./logger')

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

const t09 = val => {
    if (typeof val === "number"){
        const res =  2 * val
        console.log("va bien, el resultado es " + 2*val)
        return res
    }

    throw new Error("El valor debe ser un número")
}

//t09("nada")

// - Registra el error en un archivo a través de un try...catch

try {
    const nda = t09("texto")
} catch (e) {
    logger.error(`${e}`)
}
