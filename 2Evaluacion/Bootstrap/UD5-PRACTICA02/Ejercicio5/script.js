(() => {
    'use strict'

    // Selecciona todos los formularios con la clase .needs-validation
    const formularios = document.querySelectorAll('.needs-validation')

    // Recorre cada formulario y previene el envío si no es válido
    Array.from(formularios).forEach(formulario => {
        formulario.addEventListener('submit', evento => {
            // Si el formulario no es válido, previene el envío y detiene la propagación del evento
            if (!formulario.checkValidity()) {
                evento.preventDefault()
                evento.stopPropagation()
            }

            // Agrega la clase 'was-validated' para mostrar la validación visual
            formulario.classList.add('was-validated')
        }, false)
    })
})()
