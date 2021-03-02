function mostrar()
{
	var destino;
	var estacion;
	var precioFinal;
	var precio=15000;
	var descuento;
	var aumento;
	estacion=txtIdEstacion.value;
	destino=txtIdDestino.value;
						
	switch(estacion){
		case"Invierno":
			switch(destino){
				case "bariloche":
					aumento=20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento=10;
					break;
				case "Mar del plata":
					descuento=20;
					break;
			}		
		break;
		case"Verano":
			switch(destino){
				case "bariloche":
					descuento=20;
					break;
				case "Cataratas":
				case "Cordoba":
					descuento=10;
					break;
				case "Mar del plata":
					aumento=20;
					break;				
			}
		break;
		case"Otoño":
		case"Primavera":
			switch(destino){
				case "bariloche":
				case "Mar del plata":
				case "Cataratas":		
					aumento=10;
					break;
				default:
					break;
			}			
		break;
	}

	if(aumento!=0){
		precioFinal=precio+precio*aumento/100;
	}
	else if(descuento!=0){
		precioFinal=precio-precio*descuento/100;
	}
	else{
		precioFinal=precio;
	}
	alert("precio final "+precioFinal)
	/*
	aumentoFinal=precio*aumento/100;
	precioFinal=precio+aumentoFinal;
	descuentoFinal=precio*descuento/100;
	precioFinal=precio-descuentoFinal;
	/*switch (precioFinal) {
		case descuento:
			alert("El precio final con descuento es "+precioFinal);
			break;
		case aumento:
			alert("El precio final con aumento es "+precioFinal);
			break;
	}
	no se como hacer esta ultima parte
	*/
}//FIN DE LA FUNCIÓN