
    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    

// 1. Un campo que nos permite seleccionar la fecha y hora
//y la muestra a continuación. La salida deberá tener elsiguiente formato:

// Hoy es martes, 28 de Febrero de 2018 y son las 14:32 horas.


let espacio = document.getElementById('completa');
let boton = document.querySelector('#e1');

boton.addEventListener("click", mostrarFecha);

function mostrarFecha (){
    let fecha = document.getElementById('f1').value;
    let hora = document.querySelector('#h1').value;

    let fechaCompleta = document.createElement("p");
    const fechita = new Date(fecha);

    let dia = dias[fechita.getDay()];
    let mes = meses[fechita.getMonth()];

    fechaCompleta.innerText = "Hoy es "+dia+", "+ fechita.getDate() +" de "+mes+" y son las "+hora+" horas.";
    espacio.appendChild(fechaCompleta);

}


// 2. A continuación dos campos para introducir un mes y un año e imprima su calendario. No hace falta esmerarse en la presentación del calendario, el calendario simplificado puede ser del tipo:

// OCTUBRE – 2014
// 1 (miercoles), 2 (jueves), ….. , 31 (viernes).







// 3. Un campo que nos permita introducir una fecha y otro que nos permita introducir
// los días de retraso en el pago, una ves introducidos nos devolverá la fecha del pago.
let espacio3 = document.getElementById('completa3');
let boton3 = document.querySelector('#e3');

boton3.addEventListener("click", mostrarDemora);

function mostrarDemora(){
    let fecha = document.getElementById('f3').value;
    let diasMAS = document.querySelector('#d3').value;

    const fechita = new Date(fecha);

    const year = fechita.getFullYear();
    const mes = fechita.getMonth();
    const dia = fechita.getDate();

    let fechaFinal = new Date(year, mes, dia +parseInt(diasMAS))

    let texto = document.createElement("p");
    texto.innerText = "La fecha de pago es "+fechaFinal.toLocaleDateString() +".";
    espacio3.appendChild(texto);

}


// 4. Un cronómetro con el siguiente formato:
// Hoy es 30-9-2019 y son las 21:4:23 horas.
let espacio4 = document.getElementById('here');
let boton4 = document.querySelector('#e4');

boton4.addEventListener("click", (e) => {
    //se ejecuta la función cada segundo
    setInterval(crono, 1000)});


function crono() {
    var fechaActual = new Date();
    
    var horas = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();
  
    // Si la hora, minuto o segundo son menores que 10, se añade un 0
    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }

  
    espacio4.innerHTML = "Hoy es "+fechaActual.toLocaleDateString()+" y son las "+horas+":" +minutos+":"+segundos +".";
  }
  
  


// 5. Una alarma que mostrará la hora actual y nos permite indicar la hora a la
// que sonará, cuando llegue a la hora, pregunta si se quiere posponer o detener,
// si se pospone "sonará" a los 2 minutos. EXTRA: haz que suene un sonido
// además de mostrar el mensaje.