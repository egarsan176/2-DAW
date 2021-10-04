// Actividad 3: Realiza un ejemplo donde obtengas toda la información posible del objeto location
// de forma ordenada. Utiliza los métodos del objeto location para modificar la url, comprobando
// la diferencia entre assign y replace, haz uso también del método reload.
let mostrar = document.getElementById("boton");

mostrar.addEventListener("click", mostrarInfo);

function mostrarInfo(){

    let espacio = document.getElementById("datos");

    let p1 = document.createElement("li");
    p1.innerText = "URL de la página: "+ window.location;
    espacio.appendChild(p1);

    let p2 = document.createElement("li");
    p2.innerText = "Contenido de la URL que se encuentra después del signo #: "+ location.hash;
    espacio.appendChild(p2);

    let p3 = document.createElement("li");
    p3.innerText = "Nombre del servidor: "+ location.host;
    espacio.appendChild(p3);

    let p4 = document.createElement("li");
    p4.innerText = "URL completa de la página: "+ location.href;
    espacio.appendChild(p4);

    let p5 = document.createElement("li");
    p5.innerText = "Todo el contenido que se encuentra despúes del host: "+ location.pathname;
    espacio.appendChild(p5);

    let p6 = document.createElement("li");
    p6.innerText = "Puerto accedido: "+ location.port;
    espacio.appendChild(p6);

    let p7 = document.createElement("li");
    p7.innerText = "Protocolo empleado: "+ location.protocol;
    espacio.appendChild(p7);

    let p8 = document.createElement("li");
    p8.innerText = "Consulta (contenido después de ?): "+ location.search;
    espacio.appendChild(p8);

}

//mantengo la página actual en el historial
let botonModificar = document.getElementById('modURL');
botonModificar.addEventListener("click", (e) => {
    location.assign("http://www.ejemplo.com");
});

//borra la página actual del array history del navegador
let botonModificar2 = document.getElementById('modURL2');
botonModificar2.addEventListener("click", (e) => {
    location.replace("http://www.ejemplo.com");
});


//recarga la página desde servidor
let botonRecarga = document.getElementById('recargaPag');
botonRecarga.addEventListener("click", (e) => {
    location.reload(true);
})
//recarga la página desde la caché
let botonRecarga2 = document.getElementById('recargaPag2');
botonRecarga2.addEventListener("click", (e) => {
    location.reload(false);
})

