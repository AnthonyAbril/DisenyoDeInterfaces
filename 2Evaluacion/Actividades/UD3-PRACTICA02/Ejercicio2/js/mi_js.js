// Función para ocultar el lightbox
function accionVolver() {
    var b = document.getElementById("ligthbox"); // Obtiene el elemento ligthbox
    b.classList.add('lb-oculto'); // Agrega la clase 'lb-oculto' para ocultar el lightbox
}

// Función para mostrar el lightbox
function mostrarLB() {
    var b = document.getElementById("ligthbox");  // Obtiene el elemento ligthbox
    b.classList.remove('lb-oculto'); // Remueve la clase 'lb-oculto' para mostrar el lightbox
}

function iniciar() 
{

	volver = document.getElementById('volver');	//guarda el boton volver
	lb_opcion = document.getElementById('opc_lb');	//guarda el boton para abrir el lightbox
	
	volver.addEventListener('click', accionVolver, false);	//añade funcion de volver
	lb_opcion.addEventListener('click', mostrarLB, false);	//añade funcion de mostrar el contenido

}

window.addEventListener('load', iniciar, false);	//carga el codigo de iniciar al cargarse la pagina