// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

function sinpa() {
    return true
}

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function setProm(){
    console.log("Hola soy una promesa")
}

const miProm = new Promise((resolve, reject) => {
     const tim = setTimeout(setProm, 5000)})

// - Una función generadora de índices pares automáticos

function* generaPar() {
    let id = 0;
    while(true){
        id = id + 2
        yield id
    }
}

const gen =generaPar();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)