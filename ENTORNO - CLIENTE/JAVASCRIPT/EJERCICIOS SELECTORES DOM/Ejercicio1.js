/** mostrar el nuemro de enlaces de la pagina */


/*length para que muestre la cantidad*/

var cantidadEnlaces = document.querySelectorAll('a')

document.write("Número de Enlaces de la página: "+cantidadEnlaces.length+"<br>")



/**Dirección a la que enlaza el penúltimo enlace */

document.write("Dirección del último enlace: "+cantidadEnlaces[cantidadEnlaces.length-2].href+"<br>");



/**Numero de enlaces que enlazan a http://prueba */


var enla = document.querySelectorAll("a[href='http://prueba/']").length

document.write("Numero de enlaces que enlazan a http://prueba : "+enla+"<br>");


                // var contador = 0;
                // for(i=0; i<cantidadEnlaces.length; i++) {
                
                //   if(cantidadEnlaces[i].href == "http://prueba/" ) {
                //     contador++;
                //   }
                // }

                // document.write("Numero de enlaces que enlazan a http://prueba : "+contador);



/** Número de enlaces del tercer párrafo -->*/

var parra = document.querySelectorAll('p')
var enla3pa = parra[2].querySelectorAll('a').length

document.write("Número de Enlaces del tercer párrafo: "+enla3pa+"<br>")