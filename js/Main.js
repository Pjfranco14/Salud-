/* Preguntar nombre*/ 
var formulario1 = document.querySelector("#formulario-nombre");
var formulario2 = document.querySelector("#inputFormulario");
var btnsiguiente = document.querySelector("#btn-siguiente");


function CambiarFormulario(){
    var formulario1 = document.querySelector("#formulario-nombre");
    formulario1.classList.add('activarCaja');
}
CambiarFormulario();
    var btnsiguiente = document.querySelector("#btn-siguiente");
    btnsiguiente.addEventListener('click', function(){
    
    var formulario2 = document.querySelector("#inputFormulario");
    var formulario1 = document.querySelector("#formulario-nombre");

    formulario2.classList.add('activarCaja');
    formulario1.classList.remove('activarCaja');
});

