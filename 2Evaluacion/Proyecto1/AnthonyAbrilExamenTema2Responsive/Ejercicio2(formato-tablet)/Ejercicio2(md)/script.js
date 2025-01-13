//Boton de subir
const btnSubir = document.getElementById('btnSubir');

// Mostrar el botón cuando se desplace hacia abajo
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Muestra el botón después de 300px de scroll
        btnSubir.style.display = 'block';
    } else {
        btnSubir.style.display = 'none';
    }
});

// Desplazarse al inicio al pulsar el botón
btnSubir.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});