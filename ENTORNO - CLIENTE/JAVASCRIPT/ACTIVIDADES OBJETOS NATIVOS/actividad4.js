// Actividad 4: A partir de la página proporcionada en las transparencias
// https://developer.mozilla.org/es/docs/Web/API/Navigator indica y prueba algunos
// métodos útiles del objeto navigator.

let mostrar = document.getElementById("boton");

mostrar.addEventListener("click", mostrarInfo);

function mostrarInfo(){

    let espacio = document.getElementById("datos");

    let p1 = document.createElement("li");
    p1.innerText = "Nombre del navegador: "+ navigator.appName;
    espacio.appendChild(p1);

    let p2 = document.createElement("li");
    p2.innerText = "Versión del navegador: "+ navigator.appVersion;
    espacio.appendChild(p2);

    let p3 = document.createElement("li");
    p3.innerText = "Idioma del navegador: "+ navigator.language;
    espacio.appendChild(p3);

    let p4 = document.createElement("li");
    p4.innerText = "Idiomas conocidos por el usuario: "+ navigator.languages;
    espacio.appendChild(p4);

    let p5 = document.createElement("li");
    p5.innerText = "Sistema operativo actual: "+ navigator.oscpu;
    espacio.appendChild(p5);

}