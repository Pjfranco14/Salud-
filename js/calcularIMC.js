/* Datos del formulario de IMC*/ 
var estatura = document.querySelector("#inputEstatura").value;
var peso = document.querySelector("#inputPeso").value;
var kilos = 0.45



function calcularIMC(e){
e.preventDefault();

var nombre = document.querySelector("#inputNombre").value;
var estatura = document.querySelector("#inputEstatura").value;
var libras = document.querySelector("#inputPeso").value;
var resultado = document.querySelector("#inputRespuesta");
var peso = (libras*kilos)
var respuesta = peso/(estatura*estatura)

var cajaResultados = document.querySelector("#cajaResultados");
var bajoPesoResultado = document.querySelector("#bajoPeso");
var pesoIdealResultado = document.querySelector("#pesoIdeal");
var sobrePesoResultado = document.querySelector("#sobrePeso");
var obesidadResultado = document.querySelector("#obesidad");

var formulario2 = document.querySelector("#inputFormulario");


var bajoPeso = 0
var pesoNormal = 18.5
var sobrePeso = 25
var obesidad = 30

cajaResultados.classList.add('activarCaja');
formulario2.classList.add('desactivarCaja');

if(respuesta < pesoNormal){
bajoPesoResultado.classList.add('activarCaja');
resultado.innerHTML = ("<h1>¡OH NO " + nombre + "!</h1><h2>Te encuentras en la categoría de bajo peso, tu IMC es " + respuesta.toFixed(1) + ". Las recomendaciones de Milo para ti, son:</h2>");
}else{
    if(respuesta < sobrePeso){
        pesoIdealResultado.classList.add('activarCaja');
        resultado.innerHTML ="<h1>¡WOW, GENIAL " + nombre + "!</h1><h2>Te encuentras en la categoría de peso ideal, tu IMC es " + respuesta.toFixed(1) + ". Las recomendaciones de Milo para ti, son:</h2>";
        }else{
            if(respuesta < obesidad){
                sobrePesoResultado.classList.add('activarCaja');
                resultado.innerHTML ="<h1>¡OH NO " + nombre + "!</h1><h2>Te encuentras en la categoría de sobrepeso, tu IMC es " + respuesta.toFixed(1) + ". Las recomendaciones de Milo para ti, son:</h2>";
                }else{
                    if(respuesta > obesidad){ 
                        obesidadResultado.classList.add('activarCaja');
                        resultado.innerHTML ="<h1>¡OH NO " + nombre + "!</h1><h2>Te encuentras en la categoría de obesidad, tu IMC es " + respuesta.toFixed(1) + ". Las recomendaciones de Milo para ti, son:</h2>";

                }
            }
         }
     }
}
function cajaRespuesta(e){
    e.preventDefault();

    resultado.classList.add('#inputRespuesta');
}
var boton = document.querySelector("#inputFormulario");

boton.addEventListener("submit", calcularIMC);
boton.addEventListener("submit", cajaRespuesta);