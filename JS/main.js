//Impprtos

import {registrarNuevoUsuario} from './API.js'

//Variables
const formulario = document.getElementById("formulario");
const camposValidar = document.querySelectorAll(".validar");

const expresionesRegulares = {
    nombre: /^[a-zA-Z]+[a-zA-Z]+$/,
    email: /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/,
    telefono: /^[2-9]{1}[0-9]{9}$/
};

//Eventos
eventListeners()
function eventListeners() {

    formulario.addEventListener("submit", validarFormulario);
    camposValidar.forEach( campo => {
        if(campo.name === "area") {
            campo.addEventListener("change", validarCampo)
        } else {
            campo.addEventListener("keyup", validarCampo);
            campo.addEventListener("blur", validarCampo);
        }

    });
}


//Función que valida el formulario
function validarFormulario(e) {

    e.preventDefault();

    //Indicar los errores
    let errores = 0;
    camposValidar.forEach( campo => {
        if(campo.value === "" || campo.value === "0") {
            campo.classList.add("no-valid");
            errores ++;

        }
    });

    if(errores > 0) {
        Swal.fire({
            icon: 'error',
            title: 'ERROR :(',
            text: 'Revisa que tus datos son correctos',
            confirmButtonText: `Revisar`
          })
        return;
    }

    // Datos Validados
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const area = document.getElementById("area").value;
    const escuela = document.getElementById("escuela").value;

    const datosObj = {
        nombre,
        email,
        telefono,
        area,
        escuela
    }
    // Regitrar el usuario
    registrarNuevoUsuario(datosObj);






}

function validarCampo(e) {

    const campo = e.target;
    const campoName = campo.name;
    const campoValue = campo.value;

    if(campoName === "area") {
        if(campoValue !== "0") {
            campo.classList.remove("no-valid");
            campo.classList.add("valid");
        } else {
            campo.classList.remove("valid");
            campo.classList.add("no-valid");
        }

        return;
    }

    switch(campoName) {
        case "nombre":

            if(campoValue.length > 5) {
                campo.classList.remove("no-valid");
                campo.classList.add("valid");
            } else {
                campo.classList.remove("valid");
                campo.classList.add("no-valid");
            }
            break;
        case "email":
            if(expresionesRegulares.email.test(campoValue)) {
                campo.classList.remove("no-valid");
                campo.classList.add("valid");
            } else {
                campo.classList.remove("valid");
                campo.classList.add("no-valid");
            }
            break;
        case "telefono":
            if(expresionesRegulares.telefono.test(campoValue)) {
                campo.classList.remove("no-valid");
                campo.classList.add("valid");
            } else {
                campo.classList.remove("valid");
                campo.classList.add("no-valid");
            }
            break;

        case "escuela":
            if(campoValue.length > 1) {
                campo.classList.remove("no-valid");
                campo.classList.add("valid");
            } else {
                campo.classList.remove("valid");
                campo.classList.add("no-valid");
            }
            break;
        default:
            break;

    }
}
