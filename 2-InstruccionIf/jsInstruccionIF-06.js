function mostrar()
{
	//tomo la edad  
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	if(edad>17){
		alert("Esta persona es mayor de 18 años");
	}
	else{
		if(edad<13){
			alert("Es menor")
		}
		else{
			alert("Es adolescente")
		}
	}



}//FIN DE LA FUNCIÓN