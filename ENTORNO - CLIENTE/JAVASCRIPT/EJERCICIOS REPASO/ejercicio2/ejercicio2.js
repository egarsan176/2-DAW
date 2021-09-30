var botonadd = document.getElementById("nuevoElemento");
botonadd.addEventListener("click", add);

function add(){

        // recojo en una variable el input

    var nueva = document.getElementById('elem').value;
    var posicion = document.getElementById("pos").value;


        //creo un nuevo elemento li

    var apartadoNuevo = document.createElement('li');

        //añado al nuevo li el valor del input
    
    var lista = document.getElementById("lista");
    apartadoNuevo.appendChild(document.createTextNode(nueva));

        //guardo una variable en la posicion del li introudido en el input

    var sitio = document.getElementsByTagName("li")[parseInt(posicion)];

        //añado a la lista el li en la posicion introducida
    lista.insertBefore(apartadoNuevo, sitio);

}

var botondel = document.getElementById("borrarElemento");
botondel.addEventListener("click", del);

function del(){

        //recojo en una variable el valor de la posicion

    var posi = document.getElementById("pos").value;

    var lista = document.getElementById("lista");

    //selecciono el elemento a borrar que indica la posicion del input

    var eleBorrar = document.getElementsByTagName("li")[posi];

    //lo borro de la lista

    lista.removeChild(eleBorrar);

}