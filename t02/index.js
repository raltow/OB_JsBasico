const fecha = new Date("november 24 1990");

const web = new URL("https://www.dunebook.com");

const libro = {
    titulo: "Dune",
    autor: "Frank Herbert",
    fecha: 1945,
    url: web.host
}

const lista = ["Raúl", 32, true, fecha, libro];

console.log(lista);