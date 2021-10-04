// Actividad 1:  Crea un ejemplo de utilización del objeto window, tratando de mover y
//     redimensionar la ventana de diferentes maneras. Prueba en 2 navegadores diferentes. 

let ventana = window.open("", "", "width = 100, height=100, background-color: blue");

let botRed = document.getElementById("redim");
let botMov = document.getElementById("mov");


botRed.addEventListener("click", redimensionar);
botMov.addEventListener("click", mover);

function redimensionar() {
    ventana.resizeTo(250,250);
}
function mover(){
    ventana.moveBy(20,30);
}
