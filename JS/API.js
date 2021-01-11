
//URL DE LA API
const urlAPI = "https://cursoipn2021.herokuapp.com/api/crear/";
const url = `https://api.allorigins.win/get?url=${ encodeURIComponent(urlAPI)}`;
const camposValidar = document.querySelectorAll(".validar");
const piePagina = document.querySelector('.pie-pagina');


//Obtención de la Cookie
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


export const registrarNuevoUsuario = async alumno => {

    const Spinner = document.createElement('div');
    Spinner.classList.add('sk-chase');
    Spinner.innerHTML = `
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    <div class="sk-chase-dot"></div>
    `;

    const {nombre, email, telefono, area, escuela } = alumno;
    const alumnoObj = {
      name: nombre,
      email: email,
      number_tel: telefono,
      area: area,
      school: escuela
    };
  piePagina.appendChild(Spinner);
    try {
      await fetch(urlAPI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(alumnoObj)
      }).then(response => {
        if(response.status !== 404) {
          //Mostrar mensaje de alumno resgistardo
          Swal.fire({
              icon: 'success',
              title: 'Tu registro se completó de manera exitosa :)',
              text: 'En tu correo electrónico se te indicarán los pasos siguientes',
              confirmButtonText: `Aceptar`
            });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Fallo en el registro, intenta de nuevo :(',
            confirmButtonText: `Corregir`
          })
        }
        //Resetear el formulario
        Spinner.remove();
        formulario.reset();
        camposValidar.forEach( campo => campo.classList.remove("valid"));
      }).catch(err => {
        Swal.fire({
          icon: 'error',
          title: 'Fallo en el registro, intenta de nuevo :(',
          confirmButtonText: `Corregir`
        })
      });
      //Resetear el formulario
      Spinner.remove();
      formulario.reset();
      camposValidar.forEach( campo => campo.classList.remove("valid"));

    } catch (e) {
        await Swal.fire({
            icon: 'error',
            title: 'Fallo en el registro, intenta de nuevo :(',
            confirmButtonText: `Corregir`
          })
    }
}
