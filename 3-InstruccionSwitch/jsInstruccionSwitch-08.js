function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch(destinoIngresado){
		case "Bariloche":
		case "Ushuaia":	
			alert("En esta ciudad hace frio.");
			break;
		default:
			alert("En esta ciudad hace calor.");
			break;	
		}
} 