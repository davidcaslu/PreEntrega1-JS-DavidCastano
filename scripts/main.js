//crea un algoritmo con un condicional
//crea un algoritmo utilizando un ciclo
//armar un simulador interactivo, la estructura final de tu proyecto integrador

/*
CONSIGNA

Con los conocimientos vistos hasta el momento, empezarás a armar la estructura inicial de tu proyecto integrador.
A partir de los ejemplos mostrados la primera clase, deberás:

-Pensar el alcance de tu proyecto:
¿usarás un cotizador de seguros?
¿un simulador de créditos?
¿un simulador personalizado?

-Armar la estructura HTML del proyecto.

-Incorporar lo ejercitado en las clases anteriores, algoritmo condicional y algoritmo con ciclo.
Utilizar funciones para realizar esas operaciones.
*/

/*
FORMATO

Página HTML y código fuente en JavaScript. Debe identificar el apellido del alumno/a en el 
nombre de archivo comprimido por ““PreEntrega1+Apellido””.
*/

//COTIZADOR DE VIDEOS DE ANIMACIÓN


//VARIABLES


let tipoPersonajes;
let cantidadPersonajes;
let precioPersonajes;

let tipoEscenarios;
let cantidadEscenarios;
let precioEscenarios

let tipoAnimacion;
let cantidadMinutos;
let precioMinutoAnimacion;

let precioTotal;

//BIENVENIDA


alert (`Hola! Te damos la bienvenida al cotizador de videos de animación. Completa los siguientes datos.`);



//PERSONAJES



function elegirTipoPersonajes () {

    tipoPersonajes = prompt("¿qué tipo de personajes tiene tu video? Escribe sencillos o complejos.").toLowerCase()

    while ((tipoPersonajes != "sencillos") && (tipoPersonajes != "complejos")) {
        tipoPersonajes = prompt("Elije una opción válida. Sencillos o complejos").toLowerCase();
    }

    if (tipoPersonajes == "sencillos") {
        tipoPersonajes = 30;
        console.log (`Elegiste personajes sencillos`)
        return (tipoPersonajes)
    } else {
        tipoPersonajes = 70;
        console.log (`Elegiste personajes complejos`)
        return (tipoPersonajes)
    }
}

elegirTipoPersonajes ();

console.log (`El precio de los personajes que elegiste es $${tipoPersonajes}USD`)

cantidadPersonajes = parseInt(prompt("¿Cuántos personajes tiene tu video?"));

precioPersonajes = tipoPersonajes * cantidadPersonajes

console.log (`El valor total de los personajes de tu video es $${precioPersonajes}USD`);



//ESCENARIOS 

function elegirTipoEscenarios () {

    tipoEscenarios = prompt("¿qué tipo de escenarios tiene tu video? Escribe sencillos o complejos.").toLowerCase()

    while ((tipoEscenarios != "sencillos") && (tipoEscenarios != "complejos")) {
        tipoEscenarios = prompt("Elije una opción válida. Sencillos o complejos").toLowerCase();
    }

    if (tipoEscenarios == "sencillos") {
        tipoEscenarios = 100;
        console.log (`Elegiste escenarios sencillos`)
        return (tipoEscenarios)
    } else {
        tipoEscenarios = 200;
        console.log (`Elegiste escenarios complejos`)
        return (tipoEscenarios)
    }
}

elegirTipoEscenarios ();

console.log (`El precio de los escenarios que elegiste es $${tipoEscenarios}USD`)

cantidadEscenarios = parseInt(prompt("¿Cuántos escenarios tiene tu video?"));

precioEscenarios = tipoEscenarios * cantidadEscenarios

console.log (`El valor total de los escenarios de tu video es $${precioEscenarios}USD`);


//TIPO DE ANIMACIÓN

function elegirTipoAnimacion () {

    tipoAnimacion = prompt("¿qué tipo de animación tiene tu video? Escribe tradicional o cutout.").toLowerCase()

    while ((tipoAnimacion != "tradicional") && (tipoAnimacion != "cutout")) {
        tipoAnimacion = prompt("Elije una opción válida. Tradicional o cutout").toLowerCase();
    }

    if (tipoAnimacion == "tradicional") {
        console.log (`Elegiste animación tradicional`)
        tipoAnimacion = 900;
        return (tipoAnimacion)
    } else {
        console.log (`Elegiste animación cutout`)
        tipoAnimacion = 300;
        return (tipoAnimacion)
    }
}


elegirTipoAnimacion ();

console.log (`El precio por minuto de la animación que elegiste es $${tipoAnimacion}USD`)


cantidadMinutos = parseFloat(prompt("¿Cuántos minutos dura tu video?"));

precioMinutoAnimacion = tipoAnimacion * cantidadMinutos

console.log (`El valor de cada minuto con las carácteristicas indicadas es de $${precioMinutoAnimacion}USD`);


//DESCUENTO POR DURACIÓN EN LA ANIMACIÓN

if (cantidadMinutos >= 3 && cantidadMinutos <=4) {
    precioMinutoAnimacion = precioMinutoAnimacion * 0.8
    console.log (`Tienes un descuento del 20% en la animación`)
} else if (cantidadMinutos >= 5) {
    precioMinutoAnimacion = precioMinutoAnimacion * 0.7
    console.log (`Tienes un descuento del 30% en la animación`)
} else (precioMinutoAnimacion);

precioTotal = (precioMinutoAnimacion * cantidadMinutos) + precioEscenarios + precioPersonajes

console.log (`El valor total del video es $${precioTotal}USD`);

alert (`El valor total del video es $${precioTotal}USD`);