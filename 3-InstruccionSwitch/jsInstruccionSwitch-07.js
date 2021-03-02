function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":	
			alert("Se encuentra al sur");
			break;
		case "Cataratas":
			alert("Se encuentra al noreste");
			break;
		case "Mar del plata":
			alert("Se encuentra al este");
			break;			
	}

}//FIN DE LA FUNCIÓN