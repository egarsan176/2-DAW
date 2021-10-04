const formu = document.querySelector('form');
const boton = document.getElementById('botEnviar');

const nombre = document.getElementById('nom');
const apellidos = document.getElementById('ape');
const telefono = document.getElementById('tel');
const dni = document.getElementById('dni');
const estado = document.getElementById('estado');
const hijos = document.getElementById('hijosSI');
const hijosNO = document.getElementById('hijosNO');
const email = document.getElementById('correo');
const autorizo = document.getElementById('autorizo');

const formIsValid = {
    nombre: false,
    apellidos: false,
    telefono: false,
    dni: false,
    estado: false,
    hijos: false,
    email: false,
    autorizo: false

}

formu.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});


let regEspacios = /^\s+$/;
//validar nombre
nombre.addEventListener('change', (e) => {

    if(e.target.value.trim().length > 2 && !regEspacios.test(e.target.value)){
        formIsValid.nombre = true;
    }else{
        formIsValid.nombre = false;
    }
})

//validar apellidos
apellidos.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 2 && !regEspacios.test(e.target.value)){
        formIsValid.apellidos = true;
    }else{
        formIsValid.apellidos = false;
    }
})


//validar telefono
telefono.addEventListener('change', (e) => {
    let regTel = /^[0-9]{3}\s[0-9]{3}\s[0-9]{3}/

    if(regTel.test(e.target.value)){
        formIsValid.telefono = true;
    }else{
        formIsValid.telefono = false;
    }

})


//validar DNI
dni.addEventListener('change', (e) =>{
    let regDNI = /^[1-9][0-9]{7}[A-Z]$/;

    if(regDNI.test(e.target.value)){
        formIsValid.dni = true;
    }else{
        formIsValid.dni = false;
    }
})


//validar email
email.addEventListener('change', (e) => {
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if(reg.test(e.target.value)){
        formIsValid.email = true;
    }else{
        formIsValid.email = false;
    }
})


//estado
estado.addEventListener('change', (e) => {
    let opcion = estado.selectedIndex
    if(opcion == null || opcion == 0){
        formIsValid.estado = false;
    }else{
        formIsValid.estado = true;
    }
})
//validar autorizacion
autorizo.addEventListener('change', (e) => {
    formIsValid.autorizo = e.target.checked 
    //si esta marcado eliminamos el atributo disabled, si no lo está lo añade y lo pone activo
    e.target.checked ? boton.removeAttribute('disabled'): boton.setAttribute('disabled', true)
})

//validacion hijos
hijos.addEventListener('change', (e) => {//compruebo que al menos se marque una
    
    if (document.getElementById("hijosSI").checked || document.getElementById("hijosNO").checked){ 
        formIsValid.hijos = true;
    }
    else {
        formIsValid.hijos = false;
    }
    
})

//mostrar div oculto numero de hijos
let div = document.getElementById('oculto');
hijos.addEventListener('change', (e) => {

        if(document.getElementById("hijosSI").checked){
            div.classList.replace('oculto', 'visible');
        }
})
hijosNO.addEventListener('change', (e) => {
    if(document.getElementById("hijosNO").checked){
        div.classList.replace('visible', 'oculto');
    }
})


const validateForm = () => {
    const formValues = Object.values(formIsValid);
    const valid = formValues.findIndex(value => value == false);

    if(valid == -1){
        formu.onsubmit();
    }else{
        
        for (i =0; i<formValues.length;i++){
            if(formValues[i] == false){
                let indice = i;
                formu[indice].style.boxShadow = "0 0 8px #ff0000";
            }
            
        }

        alert("Formulario inválido")
    }
}