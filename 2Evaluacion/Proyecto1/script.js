
// Para cada item del menu nav
document.querySelectorAll('nav a').forEach(anchor => {
    
    // Se le añade la funcion al pulsarlo
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace

        const targetId = this.getAttribute('href'); // Obtiene el id objetivo

        const targetElement = document.querySelector(targetId); // Guarda el elemento de ese id

        // Si existe ese elemento
        if (targetElement) {
            // Baja hasta el elemento con
            targetElement.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'start'     // Alineación al inicio del elemento
            });
        }
    });
});

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