function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio = Math.round(Math.random()*10);
	alert(aleatorio);
	numeroAleatorio=parseInt(aleatorio);
	if(numeroAleatorio<=10&&numeroAleatorio>=9){
		alert("Excelente")
	}	
	else if(numeroAleatorio<=8&&numeroAleatorio>=4){
		alert("Aprobó")
	}
	else{
		alert("Vamos, la proxima se puede")
	}

}//FIN DE LA FUNCIÓN