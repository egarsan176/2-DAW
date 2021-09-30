let boton = document.querySelector('button');
boton.addEventListener("click", colorear);

/**
 * tr > fila
 * td > columna
 */


function colorear(){


    let valorFila = document.querySelector('#fila').value;
    let valorColumna = document.querySelector('#columna').value;


    let tabla = document.querySelector('table');
    
    //primero tengo que seleccionar el tr de la tabla
    let a1 = tabla.querySelectorAll('tr')[valorFila-1];
    //despues de ese tr selecciono el td que quiero
    let a2 = a1.querySelectorAll('td')[valorColumna-1];

    a2.style.backgroundColor = "red";

}