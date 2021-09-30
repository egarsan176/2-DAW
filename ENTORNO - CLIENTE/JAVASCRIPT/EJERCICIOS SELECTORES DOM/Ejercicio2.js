var  enlace = document.querySelector('a');
enlace.addEventListener('click', mostrar)


function mostrar(){

    var texto = document.querySelector('span');

    texto.classList.replace('oculto','visible');
    document.querySelector('a').classList.add('oculto');
}