// Insertar nuevos empleados en la tabla. Deberá crear la función javascript
// correspondiente que permita insertar nuevos empleados. En el caso de insertar
// un nuevo empleado deberá actualizarse el número total de empleados. En el
// caso de ya existir el empleado deberá mostrarse una alerta indicando que ya
// existe el empleado. El DNI será el identificador del empleado.
let botonAdd = document.querySelector('#add');
botonAdd.addEventListener("click", addEmpleado);

function addEmpleado(){

    let tabla = document.querySelector('table');

    let numero = tabla.getElementsByTagName("tr").length;
    let nombre = prompt("Nombre: ");
    let apellidos = prompt("Apellidos: ");
    let dni = prompt("Introduzca DNI: ");

    let dniExiste = false;

    //guardo todos los tr
    let filas = tabla.getElementsByTagName("tr");

    for(let i=0; i<filas.length; i++){
        //guardo todos los td que contienen los dni
        let celdaDni = filas[i].querySelectorAll("td:nth-child(2)")[0];
        if(celdaDni.textContent == dni ){
            dniExiste = true;
        }
    }
     
    if (dniExiste === true){
        alert("El DNI introducido ya existe.")

    }else{
        let datos = []
        datos.push(numero)
        datos.push(dni) 
        datos.push(nombre)
        datos.push(apellidos)
            

        let fila = document.createElement("tr");

        //creo tantas celdas como campos hay en el array de datos
        for (a=0; a<datos.length; a++){
            
            let celda = document.createElement("td");

            //añado a cada celda un elemento del array
            celda.appendChild(document.createTextNode(datos[a])); 

            fila.appendChild(celda);
            
        }
        //añado la fila a la tabla
        tabla.appendChild(fila);


        //modifico el valor del total de empleados
        let actualizar = document.getElementById("cantEmple")
        actualizar.innerHTML = "Número total de empleados: "+numero
        }
    
  
}


// Borrar un empleado de la tabla. Deberá crear la función javascript
// correspondiente que permita borrar un empleado. Para borrar un empleado
// deberá introducirse el DNI del empleado que se desea borrar. En el caso de
// borrar un empleado deberá actualizarse el número total de empleados. En el
// caso de que no exista el empleado deberá mostrarse una alerta.
let botonDel = document.querySelector('#del');
botonDel.addEventListener("click", borrarEmpleado)

function borrarEmpleado(){

    let dniBuscar = prompt("Introduzca el DNI del empleado que desea borrar: ");
    //guardo la cantidad de empleados que hay en la tabla
    let numEmpleados = document.querySelector('table').querySelectorAll('tr').length;
    //guardo todos los tr de la tabla
    let filas =  document.querySelector('table').querySelectorAll('tr');

    let aux = false;

    for (i=0; i<numEmpleados; i++){
        //selecciona todos los segundos hijos
        let columna = (filas[i].querySelector("td:nth-child(2)")).innerText

        if(columna == dniBuscar){
            //elimina la fila
            (document.querySelector('table')).deleteRow(i)
            aux = true;

        }

    }   
    if (aux === false){
        alert("No existe ningún empleado con DNI "+dniBuscar+".")
    }
}


// Modificar un empleado de la tabla. Deberá crear la función javascript
// correspondiente. En el caso de que no exista el empleado a modificar deberá
// mostrar una alerta indicando que el empleado a modificar no existe. 
let botonMod = document.querySelector('#mod');
botonMod.addEventListener("click", modificarEmpleado);

function modificarEmpleado() {

    let dniBuscar = prompt("Introduzca el DNI del empleado que desea modificar: ");

    //guardo la cantidad de empleados que hay en la tabla
    let numEmpleados = document.querySelector('table').querySelectorAll('tr').length;
    //guardo todos los tr de la tabla
    let filas =  document.querySelector('table').querySelectorAll('tr');
    let aux = false;

    for (i=0; i<numEmpleados; i++){
        //selecciona todos los segundos hijos
        let columna = (filas[i].querySelector("td:nth-child(2)")).innerText

        if(columna == dniBuscar){

            let datoModificar = prompt("Escriba 1 (modificar nombre) o 2 (modificar apellidos): ");

            if (datoModificar == 1){
                let newNombre = prompt("Nombre: ");
                filas[i].querySelectorAll('td')[2].innerHTML = newNombre;
                aux = true;

            }else if( datoModificar == 2){
                let newApe = prompt("Apellidos: ");
                filas[i].querySelectorAll('td')[3].innerHTML = newApe;
                aux = true;
            }

        }

    } 
    if (aux === false){
        alert("No existe ningún empleado con DNI "+dniBuscar+".")
    }





  }