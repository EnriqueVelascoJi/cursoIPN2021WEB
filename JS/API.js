
//URL DE LA API
const urlAPI = "https://cursoipn2021.herokuapp.com/api/crear/";
const url = `https://api.allorigins.win/get?url=${ encodeURIComponent(urlAPI)}`;
const camposValidar = document.querySelectorAll(".validar");



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

    const {nombre, email, telefono, area, escuela } = alumno;
    const alumnoObj = {
      name: nombre,
      email: email,
      number_tel: telefono,
      area: area,
      school: escuela
    };

    console.log(JSON.stringify(alumnoObj));
    try {
      await fetch(urlAPI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(alumnoObj)
      }).then(response => response.json()).then(result => console.log(result));
      //Mostrar mensaje de alumno resgistardo
      await Swal.fire({
          icon: 'success',
          title: 'Tu registro se completó de manera exitosa :)',
          text: 'En tu correo electrónico se te indicarán los pasos siguientes',
          confirmButtonText: `Aceptar`
        })


      //Resetear el formulario
      formulario.reset();

      camposValidar.forEach( campo => campo.classList.remove("valid"));
    } catch (e) {
        console.log(e);
    }
}
