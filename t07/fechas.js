// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

const hoy = new Date()

// - La fecha de tu nacimiento

const birth = new Date(1990, 10, 24)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

let compara = hoy.getTime() > birth.getTime()

// - Una variable que contenga el día de tu nacimiento

let dia = birth.getDate()

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

let mes = birth.getMonth() + 1

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let anyo = birth.getFullYear()
