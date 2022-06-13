// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:

// - Una variable llamada nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

// - Crea una nueva instancia de "Estudiante"

// - Haz la llamada al método obtenDatos

class Estudiante {
    #nombre
    #asignaturas
    constructor (nom, asig = ["Javascript", "HTML", "CSS"]) {
        this.#nombre = nom,
        this.#asignaturas = asig
    }
    obtenDatos() {
        const obj = {
            nombre: this.#nombre,
            asignaturas: this.#asignaturas
        }
        return obj
         
    }
}

const javi = new Estudiante("javi", ["Java", "Python", "otraCosa"])

console.log(javi.obtenDatos())

