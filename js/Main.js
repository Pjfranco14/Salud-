/* Preguntar nombre*/ 
var formulario1 = document.querySelector("#formulario-nombre");
var formulario2 = document.querySelector("#inputFormulario");
var btnsiguiente = document.querySelector("#btn-siguiente");


function CambiarFormulario(e){
    e.preventDefault();

    var formulario2 = document.querySelector("#inputFormulario");
    var formulario1 = document.querySelector("#formulario-nommbre");

    formulario2.classList.add('activarCaja');
    formulario1.classList.add('desactivarCaja');
};

/* ACTIVAR BOTON */
var btnsiguiente = document.querySelector("#btn-siguiente");
btnsiguiente.addEventListener('click', CambiarFormulario);