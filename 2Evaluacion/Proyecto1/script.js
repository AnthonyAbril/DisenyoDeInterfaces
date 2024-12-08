
// Para cada item de la lista
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