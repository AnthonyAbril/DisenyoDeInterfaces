function accionVolver() 
{
	var b = document.getElementById("ligthbox");
	b.classList.add('lb-oculto');
}
function mostrarLB(){
	var b = document.getElementById("ligthbox");
	b.classList.remove('lb-oculto');
}

function iniciar() 
{

	volver = document.getElementById('volver');
	lb_opcion = document.getElementById('opc_lb');
	
	volver.addEventListener('click', accionVolver, false);
	lb_opcion.addEventListener('click', mostrarLB, false);

}

window.addEventListener('load', iniciar, false);