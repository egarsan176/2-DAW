/** EJERCICIO BÁSICO 1
 * 
 * Crea una página index.html que llame a un archivo javascript cuyo nombre sea
scripts.js y una hoja de estilo cuyo nombre sea styles.css
• En el archivo index.html crea un div que tenga una clase que se llame box y cuyo
id se llame box. En la hoja de estilo defina esta clase con los siguientes valores:
o width: 100px
o height: 100px
o background: red
 */

/*me guardo en una variable el elemento*/
let caja = document.querySelector('#box');

/* Cuando el ratón entre dentro de la caja, se cambiará el color a verde. */
caja.addEventListener("mouseenter", () => {
    caja.classList.replace("box", "verde");
});

/* Cuando el ratón salga de la caja el color deberá cambiar a rojo.  */
caja.addEventListener("mouseleave", () => {
    caja.classList.replace("verde", "box");
})

/* Cuando pulsemos el botón izquierdo del ratón estando situados sobre la caja,
aparecerá por consola el mensaje “Has pulsado la caja. */
caja.addEventListener("mousedown", () => {
    console.log("Has pulsado la caja");
})

/* Al soltar el botón izquierdo del ratón en la caja, aparecerá por consola el mensaje
”Has soltado el botón izquierdo dentro de la caja”. */
caja.addEventListener("mouseup", () => {
    console.log("Has soltado el botón izquierdo dentro de la caja");
})

/** EJERCICIO BÁSICO 2 
 * 
 * • Sobre el ejercicio anterior añade un input de tipo texto.
- Al pulsar una tecla deberá aparecer el mensaje por consola “Has pulsado una
tecla”
- Al soltar la tecla deberá aparecer el mensaje por consola “Has soltado una
tecla”
*/

document.addEventListener("keydown", () => {
    console.log("Has pulsado una tecla");
})


document.addEventListener("keyup", () => {
    console.log("Has soltado una tecla")
})

// }

/* ¿Cómo podemos saber qué tecla concreta se ha pulsado?, investiga que tendrías
que utilizar para detectar la tecla concreta pulsada y muéstrala en el mensaje por
consola. */


document.addEventListener("keyup", identificarLetra);

function identificarLetra(e){

    console.log("Has pulsado la tecla: "+e.key);
}


/** EJERCICIO BÁSICO 3
 * 
 * Crea un formulario con un input de tipo texto y un botón “Enviar”. Al pulsar el
botón. Crea un evento para que al soltar una tecla se lance una función que vaya
mostrando por consola todo lo que se escribe en el input.
 */

let texto = document.querySelector('input');

texto.addEventListener("keyup", () => {
    let texto = document.getElementById('texto').value;
    console.log(texto);
});



