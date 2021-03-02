function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	if(edad<12 || edad>18)
	{
		alert("Esta persona no es adolescente");
	}	
}//FIN DE LA FUNCIÓN