// Actividad 5: Revisa la documentación del objeto screen
// https://developer.mozilla.org/es/docs/Web/API/Screen y
// busca al menos 3 ejemplos útiles que puedas realizar con este objeto.let mostrar = document.getElementById("boton");

let mostrar = document.getElementById("boton");

mostrar.addEventListener("click", mostrarInfo);

function mostrarInfo(){

    let espacio = document.getElementById("datos");

    let p1 = document.createElement("li");
    p1.innerText = "Anchura de la pantalla: "+ screen.width;
    espacio.appendChild(p1);

    let p2 = document.createElement("li");
    p2.innerText = "Altura de la pantalla: "+ screen.height;
    espacio.appendChild(p2);

    let p3 = document.createElement("li");
    p3.innerText = "Profundidad de bits de la pantalla: "+ screen.pixelDepth;
    espacio.appendChild(p3);

}