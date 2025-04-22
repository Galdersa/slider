// Sección servicios
function escalada() {
    document.getElementById('kayak').classList.remove('ver');
    document.getElementById('senderismo').classList.remove('ver');
    document.getElementById('escalada').classList.toggle('ver');
}
function kayak() {
    document.getElementById('senderismo').classList.remove('ver');
    document.getElementById('escalada').classList.remove('ver');
    document.getElementById('kayak').classList.toggle('ver');
}
function senderismo() {
    document.getElementById('escalada').classList.remove('ver');
    document.getElementById('kayak').classList.remove('ver');
    document.getElementById('senderismo').classList.toggle('ver');
}

// Sección testimonios (carrusel)
let carruserTestimonios = document.querySelector('.testimonios');
let testimonio = document.querySelectorAll('.testimonio');
let totalTestimonios = testimonio.length;
let contador = 0;

function adelante() {
    if (contador < totalTestimonios - 1) {
        contador++;
        carruserTestimonios.style.transform = `translateX(-${contador * 100}%)`;
    }
}
function atras() {
    if (contador > 0) {
        contador--;
        carruserTestimonios.style.transform = `translateX(-${contador * 100}%)`;
    }
}

// Ver el texto en el apartado password
function verPass() {
    let passwordInput = document.getElementById('pass');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}