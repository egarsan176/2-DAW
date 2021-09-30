var boton = document.getElementById("bot");
boton.addEventListener("click", mostrar);

function mostrar(){

        //creo el array de provincias
    var provincias = ['Sevilla', 'Cadiz', 'Huelva', 'Malaga', 'Granada', 'Almeria', 'Jaen', 'Cordoba'];

        //ordeno las provincias y las guardo en una nueva variable
    var provinciasOrden = provincias.sort();

    var contenedorTabla = document.getElementById("espacio");

        //creo la tabla
    var tabla = document.createElement('table');

    tabla.setAttribute("border", 1);
    tabla.setAttribute("cellspacing", 0);
    
        //uso un bucle for para crear tantas filas como provincias hay
    for (i=0; i<provinciasOrden.length; i++){

            //creo la fila y las celdas
        var fila = document.createElement("tr");
        var celda = document.createElement('td');

            //añado a cada celda un elemento del array de provincias ordenadas
        celda.appendChild(document.createTextNode(provinciasOrden[i]));

            //las añado
        fila.appendChild(celda);
        tabla.appendChild(fila);
    }

    contenedorTabla.appendChild(tabla);

    


}