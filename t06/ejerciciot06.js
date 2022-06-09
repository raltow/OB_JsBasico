
//Una variable que contenga la lista de la compra (mínimo 5 elementos)

const listacompra = ["ajo", "cebolla", "aceite", "lechuga", "pan"];

//Modifica la lista de la compra y añádele "Aceite de Girasol"

listacompra.push("Aceite de girasol");

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

listacompra.pop()

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const pelis = [{
        titulo: "La cosa", 
        director: "Marcelo Cosica", 
        fecha: 1980},
    {
        titulo: "Seven", 
        director: "Warriors Eleven", 
        fecha: 1987
    },
    {
        titulo: "Another world", 
        director: "Alain Grossjean", 
        fecha: 2020
    }
]

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const pelisModernas = pelis.filter(obj => obj.fecha > 2010)

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = pelis.map(val => val.director)

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulos = pelis.map(val => val.titulo)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const tituloDirector = directores.concat(titulos)

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const tituloDirector2 = [...directores, ...titulos]

