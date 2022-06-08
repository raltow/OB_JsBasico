let nombre = "Raúl"
console.log(nombre);
let apellido = "Álvarez"
console.log(apellido);

let estudiante = `${nombre} ${apellido}`
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let numChar = estudiante.length;
console.log(numChar);

let firstNameChar = nombre.charAt(0);
console.log(firstNameChar);
let lastSurnameChar = apellido.charAt(apellido.length -1);
console.log(lastSurnameChar);

let noSpaces = estudiante.replace(/\s+/g, '');
console.log(noSpaces);

let nameBool = estudiante.includes(nombre);
console.log(nameBool);