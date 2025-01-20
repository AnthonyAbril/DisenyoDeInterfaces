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

function retrasa(){

	var nuevoTiempo=medio.currentTime-5;
	medio.currentTime=nuevoTiempo;
	redimensionaBarra();
}

function adelanta(){

	var nuevoTiempo=medio.currentTime+5;
	medio.currentTime=nuevoTiempo;
	redimensionaBarra();
}

function reinicia(){

	var nuevoTiempo=0;
	medio.currentTime=nuevoTiempo;
	redimensionaBarra();
}

function silencia(){
	medio.muted = false;
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
    /* obtener los objetos del resto de elementos necesarios */
	
	play.addEventListener('click', accionPlay, false);
	/* crear los manejadores de eventos para el resto de botones */

	barra.addEventListener('click', desplazarMedio, false);

	
	retrasar.addEventListener('click', retrasa, false);
	adelantar.addEventListener('click', adelanta, false);
	
	reiniciar.addEventListener('click', reinicia, false);

	silenciar.addEventListener('click', silencia, false);
}

window.addEventListener('load', iniciar, false);