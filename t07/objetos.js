// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datosPersonales = {
    nombre: "Raúl",
    apellidos: "Álvarez",
    edad: 32,
    altura: 1.78,
    eresDesarrollador: true
}

// - Una variable que obtenga tu edad a partir del objeto anterior

let edad = datosPersonales.edad

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const datosAmigos = [
    {
        nombre: "Pepe",
        apellidos: "González",
        edad: 55,
        altura: 1.90,
        eresDesarrollador: true
    },
    {
        nombre: "Javier",
        apellidos: "Pérez",
        edad: 45,
        altura: 1.70,
        eresDesarrollador: false
    }
    ]

const listaDatos = [datosPersonales, datosAmigos]

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaOrdenada = [datosPersonales, ...datosAmigos]
listaOrdenada.sort((a, b)=> a.edad -b.edad)

