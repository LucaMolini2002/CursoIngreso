/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada=prompt("Ingrese la clave:");
	while(claveIngresada!="utn750"){
		alert("Clave incorrecta.");
		claveIngresada=prompt("Ingrese la clave nuevamente:");
	}
	alert("clave correcta");
	
}//FIN DE LA FUNCIÓN
