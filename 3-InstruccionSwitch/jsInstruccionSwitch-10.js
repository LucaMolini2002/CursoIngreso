function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino=txtIdDestino.value;
	switch(estacionIngresada){
		case "Invierno":
			switch(destino){
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;			
			}
		break;	
		case "Verano":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;			
			}
		break;	
		case "Otoño":
			switch(destino){
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
				case "Cordoba":
					alert("Se viaja");
					break;
			}
		break;	
		case "Primavera":
			switch(destino){
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;	
			}
		break;				
	}

}//FIN DE LA FUNCIÓN