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

	var nuevoTiempo=medio.currentTime+tiempo;
	medio.currentTime=nuevoTiempo;
	redimensionaBarra();
}

function silencia(){
	medio.muted = !medio.muted; // esto es super simple si es true lo pone a false, y viceversa
	medio.muted ? silenciar.value = 'escuchar' : silenciar.value = 'silenciar';
}

function variarVolumen(variacion){
	let nuevoVolumen = medio.volume + variacion;

	medio.volume = Math.min(Math.max(nuevoVolumen,0),1);
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

	
	retrasar.addEventListener('click', () => saltarVideo(-5), false);
	adelantar.addEventListener('click', () => saltarVideo(5), false);
	
	reiniciar.addEventListener('click', () => saltarVideo(-medio.currentTime), false);

	silenciar.addEventListener('click', silencia, false);

	menosVolumen.addEventListener('click', () => variarVolumen(-0.1), false);
	masVolumen.addEventListener('click', () => variarVolumen(0.1), false);
	

}

window.addEventListener('load', iniciar, false);