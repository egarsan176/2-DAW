
var boton = document.getElementById("boton");
boton.addEventListener("click", add);

function add(){

        //primero recojo en una variable el valor de cada input
   
    var posicion = document.getElementById('pos').value;
    var equipo= document.getElementById('equi').value;
    var puntos= document.getElementById('pun').value;

         //obtener la fila a cambiar 

    var filaCambio = document.getElementsByTagName('tr')[posicion];

        //longitud de la tabla

    var longitudTabla = parseInt(document.getElementsByTagName("tr").length)-1;

        //compruebo si la posicion ya está en la tabla para modificarla y si no está para añadirla
   
        if (posicion <= longitudTabla){

                //obtengo las celdas que hay que modificar

            var celda = filaCambio.getElementsByTagName('td')[0]
            var celda1 = filaCambio.getElementsByTagName('td')[1]
            var celda2 = filaCambio.getElementsByTagName('td')[2]

                //innerHTML – para cambiar el contenido del elemento por el valor introducido

            celda.innerHTML=posicion;
            celda1.innerHTML=equipo;
            celda2.innerHTML=puntos;

    }else{

            //si la fila no existe, creo una nueva

        var filaNueva = document.createElement('tr');
        var col1 = document.createElement('td');
        var col2= document.createElement('td');
        var col3= document.createElement('td');  

        var tablita = document.getElementById("tabla");

            //añado a cada nueva columna el valor introducido en los input

        col1.innerHTML=posicion;
        col2.innerHTML=equipo;
        col3.innerHTML=puntos;

            //las añado a la tabla

        filaNueva.appendChild(col1);
        filaNueva.appendChild(col2);
        filaNueva.appendChild(col3);
        tablita.appendChild(filaNueva);
    }

      

}