
function calcularCovid(e){
    e.preventDefault();

    var contador = 0;
    var porcentaje = 7.69230769231;
   
    if(document.getElementById('inputManifestaciones1').checked){
        contador=contador+porcentaje;      
    }
    if(document.getElementById('inputManifestaciones2').checked){
        contador=contador+porcentaje;
    }
    if(document.getElementById('inputManifestaciones3').checked){
        contador=contador+porcentaje;
    }
    if(document.getElementById('inputManifestaciones4').checked){
        contador=contador+porcentaje;
    }
    if(document.getElementById('inputManifestaciones5').checked){
        contador=contador+porcentaje;
    }
    if(document.getElementById('inputManifestaciones6').checked){
        contador=contador+porcentaje;
    }
    if(document.getElementById('inputManifestaciones7').checked){
        contador=contador+porcentaje;
    }
    if(document.getElementById('inputManifestaciones8').checked){
        contador=contador+porcentaje;
    }
    if(document.getElementById('inputManifestaciones9').checked){
        contador=contador+porcentaje;
    }
    if(document.getElementById('inputManifestaciones10').checked){
        contador=contador+porcentaje;
    }
    if(document.getElementById('inputManifestaciones11').checked){
        contador=contador+porcentaje;
    }
    if(document.getElementById('inputManifestaciones12').checked){
        contador=contador+porcentaje;
    }
    if(document.getElementById('inputManifestaciones13').checked){
        contador=contador+porcentaje;
    }

    var inputRespuesta = document.querySelector("#inputRespuesta");
    var inputRespuesta2 = document.querySelector("#inputRespuesta2");
    var inputRespuesta3 = document.querySelector("#inputRespuesta3");
    var resultadobajaProbabilidad = document.querySelector("#bajaProbabilidad");
    var resultadoProbable = document.querySelector("#probable");
    var resultadomuyProbable = document.querySelector("#muyProbable");

    var mensaje = document.querySelector("#mensaje");
    var mensaje2 = document.querySelector("#mensaje2");
    var mensaje3 = document.querySelector("#mensaje3");
    var bajaProbabilidad = 23.08;
    var probable = 69.23;
    var muyProbable= 101;

    

    if(contador < bajaProbabilidad){
    resultadobajaProbabilidad.classList.add('activarCaja');
    mensaje.innerHTML = "<h1>¡Uffff!</h1>" + "<br><h2>Tu porcentaje de manifestaciones de<br>COVID-19 apuntan a que estas libre de<br>contagio</h2>"
    inputRespuesta.innerHTML = contador.toFixed(2)+"%";
    }else{
        if(contador < probable){
        resultadoProbable.classList.add('activarCaja');
        mensaje2.innerHTML = "<h1>¡OH NO!</h1>" + "<br><h2>Tu porcentaje de manifestaciones de<br>COVID-19 apuntan a que puedes<br>estar contagiado</h2>"
        inputRespuesta2.innerHTML = contador.toFixed(2)+"%";
        }else{
            if(contador < muyProbable){
            resultadomuyProbable.classList.add('activarCaja');
            mensaje3.innerHTML = "<h1>¡OH NO!</h1>" + "<br><h2>Tu porcentaje de manifestaciones de<br>COVID-19 apuntan a que puedes<br>estar contagiado</h2>"
            inputRespuesta3.innerHTML = contador.toFixed(2)+"%";
            }      
        }
    }
}
function CambiarFormularioCovid(e){
    e.preventDefault();

    var cajaResultados = document.querySelector("#cajaResultados");
    var formularioCovid = document.querySelector("#inputFormularioCovid")

    cajaResultados.classList.add('activarCaja');
    formularioCovid.classList.add('desactivarCaja');
}

var boton = document.querySelector("#inputFormularioCovid");
boton.addEventListener("submit", calcularCovid);
boton.addEventListener("submit", CambiarFormularioCovid);
