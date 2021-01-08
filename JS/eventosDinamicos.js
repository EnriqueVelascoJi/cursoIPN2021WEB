//Variables
const menuBtn = document.querySelector('.menu-boton');
const menu = document.querySelector('.menu-navegacion');


//Eventos Dinámicos de la Página
addEventListeners();
function addEventListeners() {
    menuBtn.addEventListener("click", activarMenuResponsivo);
}

function activarMenuResponsivo(e) {
    e.preventDefault();
    if(e.target.classList.contains("icono-menu")) {
        if(menu.classList.contains("uno")) {
            menu.classList.add("dos");
            menu.classList.remove("uno")
        } else {
            menu.classList.add("uno");
            menu.classList.remove("dos");
        }
    }
}

//Animaciones con scrolll
new WOW().init();