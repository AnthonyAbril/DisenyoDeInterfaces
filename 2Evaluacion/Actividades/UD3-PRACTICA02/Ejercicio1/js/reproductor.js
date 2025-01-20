function redimensionaBarra()
{
	if(!medio.ended)
	{
		var total=parseInt(medio.currentTime*maximo / medio.duration);
		progreso.style.width=total+'px';
	}
	else
	{
		progreso.style.width='0px';
		play.value='\u25BA';
		window.clearInterval(bucle);
	}
}

function desplazarMedio(e)
{
	if(!medio.paused && !medio.ended)
	{
		var ratonX=e.pageX-barra.offsetLeft;
		var nuevoTiempo=ratonX*medio.duration/maximo;
		medio.currentTime=nuevoTiempo;
		progreso.style.width=ratonX+'px';
	}
}

function accionPlay()
{
	if(!medio.paused && !medio.ended) 
	{
		medio.pause();
		play.value='\u25BA';
		window.clearInterval(bucle);
	}
	else
	{
		medio.play();
		play.value='||';
		bucle=setInterval(redimensionaBarra, 1000);
	}
}

function saltarVideo(tiempo){

	var nuevoTiempo=medio.currentTime+tiempo;	//se suma el tiempo saltado
	medio.currentTime=nuevoTiempo;	//se aplica el cambio
	redimensionaBarra();	//se aplican los cambios en la barra
}

function silencia(){
	medio.muted = !medio.muted; // alterna el estado del booleano
	medio.muted ? silenciar.value = 'escuchar' : silenciar.value = 'silenciar';	//le da el valor al boton dependiendo del booleano
}

function variarVolumen(variacion){
	let nuevoVolumen = medio.volume + variacion;	//se le suma la variacion al volumen actual

	medio.volume = Math.min(Math.max(nuevoVolumen,0),1);	//se le aplica la suma limitada entre 0 y 1
}

function iniciar() 
{
	maximo=700;
	
	medio=document.getElementById('medio');
	barra=document.getElementById('barra');
	progreso=document.getElementById('progreso');
	play=document.getElementById('play');
	retrasar=document.getElementById('retrasar');
	adelantar=document.getElementById('adelantar');
	reiniciar=document.getElementById('reiniciar');
	silenciar=document.getElementById('silenciar');
	menosVolumen=document.getElementById('menosVolumen');
	masVolumen=document.getElementById('masVolumen');
    /* obtener los objetos del resto de elementos necesarios */
	
	play.addEventListener('click', accionPlay, false);
	/* crear los manejadores de eventos para el resto de botones */

	barra.addEventListener('click', desplazarMedio, false);

	//funcion de botones para adelantar y atrasar el video
	retrasar.addEventListener('click', () => saltarVideo(-5), false);
	adelantar.addEventListener('click', () => saltarVideo(5), false);
	
	//funcion de boton para reiniciar el video
	reiniciar.addEventListener('click', () => saltarVideo(-medio.currentTime), false);

	//funcion de boton para silenciar el video
	silenciar.addEventListener('click', silencia, false);

	//funcion de botones para subir y bajar el volumen
	menosVolumen.addEventListener('click', () => variarVolumen(-0.1), false);
	masVolumen.addEventListener('click', () => variarVolumen(0.1), false);
	

}

window.addEventListener('load', iniciar, false);