function mostrar()
{
	//tomo la edad  
	var edadIngresada;
	edadIngresada=txtIdEdad.value;
	edad=parseInt(edadIngresada);
		if(edad>17)
		{
			alert("Esta persona es mayor de edad");
		}
		else
		{
			alert("Esta persona no es mayor de edad");
		}
	
}//FIN DE LA FUNCIÓN