let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función para seleccionar un elemento del menú
function seleccionar(event) {
    var elementos = document.querySelectorAll(".nav-responsive a");
    elementos.forEach(function(elemento) {
        elemento.classList.remove("seleccionado");
    });
    event.target.classList.add("seleccionado");
}

// Función para cambiar el color del icono al hacer clic
function changeColor() {
    var icon = document.getElementById("menu-icon");
    icon.classList.toggle("icon-clicked");
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("dedicacion");
        habilidades[6].classList.add("ilustrator");
    }
}

// Event listeners para los elementos del menú
document.querySelectorAll(".nav-responsive a").forEach(function(elemento) {
    elemento.addEventListener("click", seleccionar);
});

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
};

// Event listener para el DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    let icon = document.querySelector(".fa-facebook-f");
    icon.classList.add("nueva-clase");
});