import CL_Mayores from "./CL_Mayores.js";
import CL_Personas from "./CL_Personas.js";


let personas1 = new CL_Personas("Luis", 15);
let personas2 = new CL_Personas("Ana", 19);
let personas3 = new CL_Personas("Jose", 21);
let personas4 = new CL_Personas("Carmen", 17);
let personas5 = new CL_Personas("Rosa", 18);
let personas6 = new CL_Personas("Jose", 22);
let personas7 = new CL_Personas("Maria", 17);
let personas8 = new CL_Personas("Luz", 19);
let personas9 = new CL_Personas("Rafael", 23);
let personas10 = new CL_Personas("Liz", 15);
let personas11 = new CL_Personas("Marcos", 20);
let personas12 = new CL_Personas("Leo", 16);


let mayores = new CL_Mayores();

mayores.procesarPersonas(personas1);
mayores.procesarPersonas(personas2);
mayores.procesarPersonas(personas3);
mayores.procesarPersonas(personas4);
mayores.procesarPersonas(personas5);
mayores.procesarPersonas(personas6);
mayores.procesarPersonas(personas7);
mayores.procesarPersonas(personas8);
mayores.procesarPersonas(personas9);
mayores.procesarPersonas(personas10);
mayores.procesarPersonas(personas11);
mayores.procesarPersonas(personas12);

let salida = document.getElementById("salida");

salida.innerHTML =`
<br>Cantidad de personas: ${mayores.cantidadPersonas()}
<br>Cantidad de personas mayores de edad: ${mayores.cantidadMayores()}
<br>Porcentaje de personas mayores de edad: ${mayores.porcentajeEdadPersonasMayores()}`
