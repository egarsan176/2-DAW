let botAtras = document.querySelector("#back");
botAtras.addEventListener("click", (e) => {
    history.back();
})

let botSig = document.querySelector("#next");
botSig.addEventListener("click", (e) => {
    history.forward();
})

let botLen = document.querySelector("#len");
botLen.addEventListener("click", (e) => {
    alert("Has visitado un total de "+history.length+ " en tu historial.");
})